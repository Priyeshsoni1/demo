"use client"
import React from 'react'
import {Formik} from 'formik';
import * as Yup from 'yup'
const Form = () => {
  const initialValues={}
  const validationSchema={}
  const onSubmit=values=>{
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=>(
         <div></div>
        )
      }

    </Formik>
  )
}

export default Form
