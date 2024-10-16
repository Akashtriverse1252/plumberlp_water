import React, { useEffect, useState } from "react";
import { Formik, Field, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import "./index.css";
import { useAlert } from "../../context/AlertProvider";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
});

const EnquiryForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  // Fetch States on component load
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://www.plumberbathware.com/api/get_states.php"
        );
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when a state is selected
  const fetchCities = async (stateId) => {
    try {
      const response = await fetch(
        `https://www.plumberbathware.com/api/get_cities.php?sid=${stateId}`
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = { ...values, lp: "lp_save_water_pledge" };
      console.log("formData", formData);
      const response = await fetch(
        "https://www.plumberbathware.com/api/save_water_submit.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.status === "success") {
        localStorage.setItem("authToken", result.token_id);
        navigate("/enquiry-submitted");
        window.dataLayer.push({
          event: "FormSubmission",
          formType: "Save-water-pledge",
          status: "success",
        });
      } else {
        showAlert("error", "Error!", "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showAlert(
        "error",
        "Submission Error",
        "An error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const FormFields = () => {
    const { setFieldValue } = useFormikContext();

    return (
      <ul>
        <li>
          <Field name="name" type="text" placeholder="Name" />
        </li>
        <li>
          <Field name="phone" type="tel" placeholder="Mobile No." />
        </li>
        <li>
          <Field name="email" type="email" placeholder="Email ID" />
        </li>
        <li className="state">
          <Field name="state">
            {({ field }) => (
              <div>
                <select
                  {...field}
                  onChange={(e) => {
                    const selectedState = states.find(
                      (state) => state.sname === e.target.value
                    );
                    if (selectedState) {
                      fetchCities(selectedState.stateid);
                      setSelectedState(selectedState.stateid);
                      setFieldValue("state", e.target.value);
                      setFieldValue("city", ""); // Reset city selection
                    }
                  }}
                >
                  <option value=""> State</option>
                  {states.map((state) => (
                    <option key={state.stateid} value={state.sname}>
                      {state.sname}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </Field>
        </li>
        <li className="city">
          <Field name="city">
            {({ field }) => (
              <div>
                <select
                  {...field}
                  disabled={!selectedState || cities.length === 0}
                >
                  <option value=""> City</option>
                  {cities.map((city) => (
                    <option key={city.cityid} value={city.cityname}>
                      {city.cityname}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </Field>
        </li>
        <li>
          <button className="btn w-full mt-4" type="submit">
            <span>Take the Pledge</span>
          </button>
        </li>
      </ul>
    );
  };

  return (
    <div className="enquirybox">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleSubmit, isSubmitting, validateForm }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validateForm().then((formErrors) => {
                const errorCount = Object.keys(formErrors).length;
                if (errorCount > 0) {
                  if (errorCount < 2) {
                    // Show the actual error message if there's only one error
                    const errorMessage = Object.values(formErrors)[0]; // Get the first error message
                    showAlert("error", "Validation Error", errorMessage);
                  } else {
                    // General error message if there are two or more errors
                    showAlert(
                      "error",
                      "Validation Error",
                      "Please complete all required fields."
                    );
                  }
                } else {
                  handleSubmit();
                }
              });
            }}
          >
            <div
              className="form"
              data-aos="fade-in"
              data-aos-offset={0}
              data-aos-once="true"
              data-aos-duration={600}
            >
              <span className="text-white enquiryText">
                Please fill in the form below to join us and participate in the
                Plumber Bathware Saving Water Pledge program. You will also
                receive a personalized certificate.
              </span>
              <FormFields />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EnquiryForm;
