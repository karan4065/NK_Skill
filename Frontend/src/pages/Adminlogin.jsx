import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const adminLogin = () => {
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
        `${import.meta.env.VITE_APP}/api/admin/login`,
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
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', background: 'linear-gradient(to right, #f0e6ff, #e6f0ff)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <Toaster />
      <div className="row w-100 justify-content-center align-items-center px-3">
        <div className="col-lg-5 col-md-8" data-aos="fade-right">
          <div className="p-5 bg-white rounded-4 shadow-lg">
            <h2 className="text-center mb-3 fw-semibold text-primary">Admin Login</h2>
            <p className="text-center text-muted mb-4" style={{ fontSize: '0.95rem' }}>
              Manage your bakery dashboard securely.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group mb-4">
                <input
                  type="text"
                  {...register('username', { required: 'Username is required' })}
                  className="form-control form-control-lg"
                  placeholder="Admin Username"
                  autoComplete="username"
                  style={{ backgroundColor: '#f2f6fc' }}
                />
                {errors.username && <p className="text-danger mt-2">{errors.username.message}</p>}
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                  className="form-control form-control-lg"
                  placeholder="Password"
                  autoComplete="current-password"
                  style={{ backgroundColor: '#f2f6fc' }}
                />
                {errors.password && <p className="text-danger mt-2">{errors.password.message}</p>}
              </div>

              <div className="d-flex justify-content-between flex-wrap gap-2">
                <NavLink to="/login" className="btn btn-outline-primary px-4">
                  User Login
                </NavLink>
                <button type="submit" className="btn btn-primary px-5">
                  Admin Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0 text-center" data-aos="fade-left">
          <img
            src="https://img.freepik.com/free-vector/admin-login-concept-illustration_114360-739.jpg"
            alt="Admin Login Illustration"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: '480px' }}
          />
          <p className="text-muted mt-3">
            Securely manage your bakery inventory, orders, and analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default adminLogin;