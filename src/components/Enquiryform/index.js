import React, { useEffect, useState } from "react";
import { Formik, Field, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import "./index.css";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  city: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  city: Yup.string().required("Required"),
});

const EnquiryForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (values, actions) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      console.log(values);
      // Add your form submission logic here
      setFormSubmitted(true);
    } catch (errors) {
      console.log(errors);
    }
  };

  const FormFields = () => {
    const { values } = useFormikContext();
    const [isOtherCity, setIsOtherCity] = useState(false);

    useEffect(() => {
      if (values.city === "Others") {
        values.city = "";
        setIsOtherCity(true);
      }
    }, [values.city]);

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
        {isOtherCity ? (
          <li>
            <Field name="city" type="text" placeholder="Enter City" />
          </li>
        ) : (
          <li>
            <Field as="select" name="city">
              <option value=""> City</option>
              <option value="Delhi">Delhi</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Gurgaon">Gurugram</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Noida">Noida</option>
              <option value="Others">Others</option>
            </Field>
          </li>
        )}

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
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div
              className="form"
              data-aos="fade-in"
              data-aos-offset={0}
              data-aos-once="true"
              data-aos-duration={600}
            >
              <span className="text-white enquiryText">
                Please fill in the form below to join the water saving movement
                and be eligible for winning 2 free German water saving Aerators.
                You will also receive a personalized certificate.
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
