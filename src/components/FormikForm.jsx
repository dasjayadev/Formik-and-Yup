import React from "react";
import { useFormik } from "formik";
import {signupSchema} from "../schemas/schemas.js"
import "../App.css"

//for inicial value
const initialValues = {
    name: "",
    email: "",
    password: ""
  }


//for valodation
// const validate =  values =>{

//     //values.name values.email values.password  {3 propaties for 3 form fields}
//     //errors.name errors.email errors.password  {key similar to object}
//     //errors.name = "this fiels is required" 
//     //errors.email = "" 
//     //errors.password = "" {key similar to values object}


//     let errors = {}
//     if(!values.name){
//         errors.name = "This name Field is Required"
//     }
//     if(!values.email){
//         errors.email = "This email Field is Required"
//     } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)){
//         errors.email = "Invalid Email Address"
//     }
//     if(!values.password){
//         errors.password = "This password Field is Required"
//     }
//     return errors           //must return a object
// }


//for onSubmit
const onSubmit =  (values, action) => {
    console.log('form data',values);
    action.resetForm();
  }
function FormikForm() {
  //all these are propaties
  const formik = useFormik({
    initialValues,
    // validate,
    validationSchema:signupSchema,
    onSubmit
  });

  console.log(formik);
  console.log("formik values", formik.values);
  console.log("formik errors",formik.errors);
  console.log("visited field",formik.touched);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
        //   onChange={formik.handleChange}
        //   onBlur={formik.handleBlur}
        //   value={formik.values.name}
        //   insted of this we can use  single line use the method as (getFieldProps)
          {...formik.getFieldProps('name')}
        />
         {/* //conditional randaring */}
        <div className="error">
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>  
        </div>
        <br />
        <div className="form-control">
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />{" "}
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <br />
        <div className="form-control">
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <br />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default FormikForm;
