// "use client";
// import React from "react";
// import styles from "./page.module.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// const validationSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   channel: Yup.string().required("Required!"),
// });
// const Formik = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       channel: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//     validationSchema,
//     //  validate:values=>{
//     //   let error={}
//     //   if(!values.name){
//     //     error.name="required"
//     //   }
//     //       if(!values.email){
//     //     error.email="required"
//     //   }
//     //       if(!values.channel){
//     //     error.channel="required"
//     //   }
//     //   return error
//     //  }
//   });

//   return (
//     <div>
//       <form
//         className={styles.app}
//         action="
//     "
//         onSubmit={formik.handleSubmit}
//       >
//         <div className={styles.container}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             // onBlur={formik.handleBlur}
//             // onChange={formik.handleChange}
//             // value={formik.values.name}
//             {...formik.getFieldProps("name")}
//           />
//         </div>{" "}
//         {formik.touched.name && formik.errors.name ? (
//           <div>{formik.errors.name}</div>
//         ) : null}
//         <div className={styles.container}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             {
//               ...formik.getFieldProps("email")
//             }
//             // onBlur={formik.handleBlur}
//             // onChange={formik.handleChange}
//             // value={formik.values.email}
//           />
//         </div>{" "}
//         {formik.touched.email && formik.errors.email ? (
//           <div>{formik.errors.email}</div>
//         ) : null}
//         <div className={styles.container}>
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             name="channel"
//             {...formik.getFieldProps("channel")}
//             // onBlur={formik.handleBlur}
//             // onChange={formik.handleChange}
//             // value={formik.values.channel}
//           />
//         </div>{" "}
//         {formik.touched.channel && formik.errors.channel ? (
//           <div>{formik.errors.channel}</div>
//         ) : null}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Formik;

//Above code is normal use of formik , now from this we short the code.
"use client";
import React from "react";
import styles from "./page.module.css";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { Erica_One } from "next/font/google";
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  channel: Yup.string().required("Required!"),
  comment: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  option: Yup.string().required("bhai bhar de yrr"),
  radio:Yup.string().required("bhai bhar de yrrr"),
 check:Yup.array()
 .max(2, "Only 10tags are allowed")
 .min(1,"Provide at least one tag"),
});

const Formiky = () => {
  const options = [
    {
      key: "select a option",
      value: "",
    },
    {
      key: " option1",
      value: "option1",
    },
    {
      key: "option2",
      value: "option2",
    },
    {
      key: "option3",
      value: "option3",
    },
  ];

  const radio = [

    {
      key: " option1",
      value: "option1",
    },
    {
      key: "option2",
      value: "option2",
    },
    {
      key: "option3",
      value: "option3",
    },
  ];
  const check = [

    {
      key: " option1",
      value: "option1",
    },
    {
      key: "option2",
      value: "option2",
    },
    {
      key: "option3",
      value: "option3",
    },
  ];
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comment: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    option: "",
    radio:"",
    check:[],
    phNumbers: [""],
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };
  return (
    <div>
      {" "}
      <Link href="/formik/newForm">New Form</Link>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // validateOnBlur and validateOnChange for true and false for validation schema
      >
        <Form
          className={styles.app}
          action=" 
    "
        >
          <div className={styles.container}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <div className={styles.error}>
              {" "}
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className={styles.container}>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />

            <ErrorMessage name="email">
              {(error) => <div className={styles.error}>{error}</div>}
            </ErrorMessage>
          </div>

          <div className={styles.container}>
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" />
          </div>
          <div className={styles.container}>
            <label htmlFor="comment">Channel</label>
            <Field type="text" as="textarea" id="comment" name="comment" />
            <ErrorMessage name="channel" />
          </div>
          <div className={styles.container}>
            <label htmlFor="address">Channel</label>
            <Field name="address">
              {(props) => {
                const { field, form, meta } = props;
                console.log(props);
                return (
                  <div>
                    <input id="address" type="text" {...field} />
                    <div>
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>

          <div className={styles.container}>
            <label htmlFor="facebook">Facebook</label>
            <Field name="social.facebook" />
          </div>
          <div className={styles.container}>
            <label htmlFor="twitter">Facebook</label>
            <Field name="social.twitter" />
          </div>
          <div className={styles.container}>
            <label htmlFor="phoneNumbers">phoneNumbers0</label>
            <Field name="phoneNumbers[0]" />
          </div>
          <div className={styles.container}>
            <label htmlFor="phoneNumbers">phoneNumbers1</label>
            <Field type="number" name="phoneNumbers[1]" />
          </div>

          <div className={styles.container}>
            <label htmlFor="option" id="option">
              option
            </label>
            <Field as="select"  name="option">
              {options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                );
              })}
            </Field>
            <div className={styles.error}>
              <ErrorMessage name="option" />
            </div>
          </div>
          <div className={styles.container}>
            <label htmlFor="option" >
              option
            </label>
            <Field as="radio" id="radio" name="radio">
              {radio.map((option) => {
                return (
                  <div key={option.key}>
                    <Field type="radio" id={option.key} name="radio" value={option.value} />
                    <label htmlFor={option.key}>{option.key}</label>
                  </div>
                );
              })}
          </Field>
            <div className={styles.error}>
              <ErrorMessage name="radio" />
            </div>
          </div>


          <div className={styles.container}>
            <label htmlFor="check" >
              check
            </label>
            <Field as="checkBox" id="check" name="check">
              {radio.map((option) => {
                return (
                  <div key={option.key}>
                    <Field type="checkbox" id={option.key} name="check" value={option.value} />
                    <label htmlFor={option.key}>{option.key}</label>
                  </div>
                );
              })}
          </Field>
            <div className={styles.error}>
              <ErrorMessage name="check" />
            </div>
          </div>






          <div className={styles.container}>
            <label htmlFor="phoneNumbers">phoneNumbers1</label>

            <FieldArray name="phNumbers">
              {(fieldArrayProps) => {
                const { remove, push, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field type="number" name={`phNumbers[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        )}

                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Formiky;
