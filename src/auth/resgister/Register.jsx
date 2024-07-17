import { Button } from 'flowbite-react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'


// initialValue
const initailizeValues ={
    email:"",
    first_name:"",
    last_name: "",
    password :"",
    confirm_password :""
}
//  validation Schema
const validationSchema = Yup.object().shape({
    email:Yup.string().email("Invalide email").required("Email is required "),
    first_name :Yup.string().required("First name is required "),
    last_name: Yup.string().required("Last name is required "),
    password: Yup.string().min("Password at least 6 charachters").required("password is required "),
    confirm_password : Yup.string().oneOf([Yup.ref("Confirm Password ") ,null],"Confirm passworld must be match"),

});
export default function Register() {
    const  handleRegister = (values) =>{
        console.log(values);
    }
  return (
      
    <section className="h-screen flex justify-center items-center flex-col">
         
        <section className="w-1/2 bg-slate-100 p-5 rounded-md text-start">
        <h2 className="text-3xl text-center  font-bold text-blue-800 mb-5">Resister </h2>
            <Formik
                initailizeValues ={initailizeValues}
                validationSchema ={validationSchema}
                onSubmit={(value)=>{
                    // console.log(value);
                    handleRegister(value);
                }}
            >  
               <Form  >
               {/* Email */}
                <div className="mb-5">
                    <label htmlFor="email"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >Email</label>
                    <Field type="email" 
                     id="email"
                     name="email"
                     placeholder ="Please enter an email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                    <ErrorMessage component="div" 
                     name="email"
                     className="text-red-700 text-sm"
                     >
                     </ErrorMessage>
                    
                </div>
                {/* End of Email  */}

                {/*  First_name */}
                  <div className="mb-5">
                    <label htmlFor="first_name"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    > First name</label>
                    <Field type="first_name" 
                     id="first_name"
                     name="first_name"
                     placeholder ="Please enter first name "
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                    <ErrorMessage component="div" 
                     name="first_name"
                     className="text-red-700 text-sm"
                     >
                     </ErrorMessage>
                </div>
                {/*  End of first name  */}

                {/* last_name */}
                <div className="mb-5">
                    <label htmlFor="last_name"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >Last name</label>
                    <Field type="last_name" 
                     id="last_name"
                     name="last_name"
                     placeholder ="Please enter last name "
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                    <ErrorMessage component="div" 
                     name="last_name"
                     className="text-red-700 text-sm"
                     >
                     </ErrorMessage>
                </div>
                {/* End of last name */}

                {/*  Password  */}
                 <div className="mb-5">
                    <label htmlFor="password"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >Passworld</label>
                    <Field type="password" 
                     id=" password"
                     name=" password"
                     placeholder ="Please enter a password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                    <ErrorMessage component="div" 
                     name="password"
                     className="text-red-700 text-sm"
                     >
                     </ErrorMessage>
                </div>
                {/* End of password  */}

                {/*  Confirm Password  */}
                <div className="mb-5">
                    <label htmlFor=" confirm_password "
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >Confirm Passworld</label>
                    <Field type="confirm_password " 
                     id=" confirm_password "
                     name=" confirm_password "
                     placeholder ="Please enter confrim password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                    <ErrorMessage component="div" 
                     name=" confirm_password "
                     className="text-red-700 text-sm"
                     >
                     </ErrorMessage>
                </div>
                {/* End of password  */}
               </Form>
            </Formik>
            <div className="flex justify-end">
                <Button type="submit">Register</Button>
           </div>
         </section>
    </section>

  )
}
