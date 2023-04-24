import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// create a schema for validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate(-1);
    }, 0);
  }
  return (
    <div className="p-3 m-5 rounded-md">
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // call handleNavigate and pass input filed data
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            {/* Passing handleSubmit parameter to html form onSubmit property */}
            <form
              noValidate
              onSubmit={handleSubmit}
              className="flex justify-center flex-col items-center p-2 m-2 bg-gray-200 rounded-md "
            >
              <span className="m-2 p-2 rounded-md font-bold text-3xl">
                Login
              </span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
                className="form-control inp_text m-2 p-2 rounded-md"
                id="email"
              />
              {/* If validation is not passed show errors */}
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
                className=" m-2 p-2 rounded-md"
              />
              {/* If validation is not passed show errors */}
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
              {/* Click on submit button to submit the form */}
              <button
                className="m-2 p-2 bg-gray-300 rounded-md hover:bg-gray-400"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
