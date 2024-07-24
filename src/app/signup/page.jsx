
"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone_no: '',
      gov_body: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Please enter the username'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter the email'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Please enter the password'),
      phone_no: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Please enter the phone number'),
      gov_body: Yup.string()
        .required('Please enter the government body'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await axios.post("https://wildlife-monitoring-software.onrender.com/signup", values);
        toast.success("Signup success");
        resetForm();
        router.push("/login");
      } catch (error) {
        console.error("Signup failed", error);
        toast.error(error.response.data.error);
        resetForm();
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 " onClick={() => router.push("/")}>
      <Toaster />
      <div className="bg-white rounded-xl shadow-lg w-96 p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">{loading ? "Processing" : "Sign Up"}</h1>
        <p className="mb-4 text-black">Please enter your details to create an account.</p>
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="username" className="text-black mb-2">Username</label>
            <input
              id="username"
              type="text"
              {...formik.getFieldProps('name')}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-sm">{formik.errors.username}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-black mb-2">Email</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-black mb-2">Password</label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps('password')}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="text-black mb-2">Phone Number</label>
            <input
              id="phoneNumber"
              type="text"
              {...formik.getFieldProps('phone_no')}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
            )}
          </div>

          <div>
            <label htmlFor="governmentBody" className="text-black mb-2">Government Body</label>
            <input
              id="governmentBody"
              type="text"
              {...formik.getFieldProps('gov_body')}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
            />
            {formik.touched.governmentBody && formik.errors.governmentBody && (
              <div className="text-red-500 text-sm">{formik.errors.governmentBody}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm md:text-base">
          <p className="text-black">
            Already have an account?{" "}
            <span
              className="text-green-700 hover:underline cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

















