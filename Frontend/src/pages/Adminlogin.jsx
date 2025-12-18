import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdminLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) navigate('/dashboard');
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP}/api/adminlogin`,
        data,
        { withCredentials: true }
      );
console.log(res.data)
      if (res.data.message === 'success') {
        localStorage.setItem('adminToken', res.data.token); // store JWT
        toast.success('Admin Login Successful 🎉');
        navigate('/dashboard');
      } else {
        toast.error(res.data.message || 'Invalid admin credentials ❌');
      }
    } catch (err) {
      toast.error('Something went wrong! ❌');
      console.error('Admin login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 px-4">
      <Toaster />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Illustration */}
        <div className="hidden lg:flex items-center justify-center" data-aos="fade-right">
          <div className="max-w-md text-center">
            <img
              src="https://img.freepik.com/free-vector/admin-login-concept-illustration_114360-739.jpg"
              alt="Admin Login Illustration"
              className="w-full rounded-2xl shadow-sm"
              style={{ maxHeight: '480px' }}
            />
            <p className="text-sm text-gray-600 mt-4">Manage the platform securely and efficiently.</p>
          </div>
        </div>

        {/* Admin Login Card */}
        <div className="flex items-center justify-center" data-aos="fade-left">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">Admin Login</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">Secure access to the admin dashboard</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                {...register('username', { required: 'Username is required' })}
                placeholder="Admin Username"
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

              <div className="flex gap-3 flex-wrap">
                <NavLink to="/login" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm">User Login</NavLink>

                <button type="submit" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm shadow">Admin Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;