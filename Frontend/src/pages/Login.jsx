import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:4000/api/login`,
        data
       
      );
console.log(res.data)
      if (res.data.message === 'success') {
        // Save token
        localStorage.setItem('token', res.data.token);

        toast.success('Login Successful 🎉');
        navigate('/');
      } else {
        toast.error(res.data.message || 'Invalid credentials ❌');
      }
    } catch (error) {
      console.error('Login Error:', error);
      toast.error('Something went wrong ❌');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 font-sans px-4">
      <Toaster />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Illustration */}
        <div className="hidden lg:flex items-center justify-center" data-aos="fade-right">
          <div className="max-w-md text-center">
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt="Login Illustration"
              className="w-full rounded-2xl shadow-sm"
              style={{ maxHeight: '480px' }}
            />
            <p className="text-sm text-gray-600 mt-4">
              Empowering learners with practical skills and real-world exposure.
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="flex items-center justify-center" data-aos="fade-left">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">Login to Continue</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">Access your dashboard and course resources</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                {...register('username', { required: 'Username is required' })}
                placeholder="Username"
                autoComplete="username"
                className="mt-2 mb-4 w-full px-3 py-2 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.username && <p className="text-sm text-red-600 mb-3">{errors.username.message}</p>}

              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Password"
                autoComplete="current-password"
                className="mt-2 mb-4 w-full px-3 py-2 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.password && <p className="text-sm text-red-600 mb-3">{errors.password.message}</p>}

              <div className="flex justify-end mb-4">
                <NavLink to="/contact" className="text-sm text-blue-600 hover:underline">Forgot password?</NavLink>
              </div>

              <div className="flex gap-3 flex-wrap">
                <NavLink to="/signup" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm">Signup</NavLink>

                <button type="submit" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm shadow">Login</button>

                <button type="button" onClick={() => navigate('/adminlogin')} className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">Admin Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
