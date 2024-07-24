
"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);

  const validationSchema = showResetForm
    ? Yup.object({
        email: Yup.string().email('Invalid email address').required('Please enter the email'),
      })
    : Yup.object({
        email: Yup.string().email('Invalid email address').required('Please enter the email'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Please enter the password'),
      });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
     
        login(values);
      
    },
  });

  const login = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signin", values);
      toast.success("Login successfully");
      if (typeof window !== 'undefined') {
        localStorage.setItem("email", values.email);
      }
      router.push("/dashboard");
    } catch (error) {
      toast.error("Login failed: " + (error.response?.data?.error || error.message));
      formik.resetForm();
    } finally {
      setLoading(false);
    }
  };

  
  const toggleForgotPassword = () => {
    setShowResetForm(!showResetForm);
    formik.resetForm();
    formik.setValues({ email: '', password: '' });
    formik.setTouched({});
    formik.setErrors({});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-20 text-black">
      <Toaster />
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg">
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-black">{loading ? "Processing" : (showResetForm ? "Reset Password" : "Welcome back")}</h1>
          <p className="mb-8 text-sm md:text-base text-black">Please enter your details.</p>
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <label htmlFor="email" className="text-black mb-2 text-sm md:text-base">Email</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-sm md:text-base"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs md:text-sm mb-4">{formik.errors.email}</div>
            )}

            {!showResetForm && (
              <>
                <label htmlFor="password" className="text-black mb-2 text-sm md:text-base">Password</label>
                <input
                  id="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                  className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-sm md:text-base"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-xs md:text-sm mb-4">{formik.errors.password}</div>
                )}
              </>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-black py-2 md:py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm md:text-base"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {showResetForm ? "Send Reset Link" : "Sign in"}
            </button>
          </form>

          <div className="flex justify-between items-center mt-4 text-sm md:text-base">
            <button onClick={toggleForgotPassword} className="text-green-700 hover:underline">
              {showResetForm ? "Back to Login" : "Forgot password?"}
            </button>
          </div>

          {!showResetForm && (
            <p className="mt-8 text-center text-sm md:text-base text-black">
              Dont have an account? <span className="text-green-700 hover:underline cursor-pointer" onClick={() => {
                router.push("/signup");
              }}>Sign up</span>
            </p>
          )}
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/login.jpeg" // Replace with your image path
            alt="Login Image"
            layout="fill"
            objectFit="cover"
            className="rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;



