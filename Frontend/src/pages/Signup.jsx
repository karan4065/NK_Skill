import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
useEffect(()=>{
 let y= localStorage.getItem("token")
  if(y){
    navigate("/home")
  }
},[])
console.log(`${import.meta.env.VITE_APP}`)
  const onSubmit = async (data) => {
  try {
const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/signup`,
  data
);

console.log("Signup response:", response.data);


    if (response.data.message === "success") {
      toast.success("Account created successfully 🎉");
      setTimeout(() => navigate("/login"), 1000);
    }
  } catch (err) {
    console.error("Signup Axios error:", err.response?.data || err.message);
    toast.error(err.response?.data?.message || "Something went wrong ❌");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 px-4 font-sans">
      <Toaster />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Illustration (left on large screens) */}
        <div className="hidden lg:flex items-center justify-center" data-aos="fade-right">
          <div className="max-w-md text-center">
            <img
              src="https://img.freepik.com/free-vector/account-concept-illustration_114360-3766.jpg"
              alt="Signup Visual"
              className="w-full rounded-2xl shadow-sm"
              style={{ maxHeight: '480px' }}
            />
            <p className="text-sm text-gray-600 mt-4">Secure and simple onboarding for learners.</p>
          </div>
        </div>

        {/* Signup Card */}
        <div className="flex items-center justify-center" data-aos="fade-left">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">Create Your Account</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">Join our community and start your journey with us.</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                {...register('name', { required: 'Full name is required' })}
                placeholder="Your full name"
                className="mt-2 mb-4 w-full px-3 py-2 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.name && <p className="text-sm text-red-600 mb-3">{errors.name.message}</p>}

              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="you@example.com"
                className="mt-2 mb-4 w-full px-3 py-2 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.email && <p className="text-sm text-red-600 mb-3">{errors.email.message}</p>}

              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                {...register('password', { required: 'Password is required', minLength: 6 })}
                placeholder="Create a password"
                className="mt-2 mb-4 w-full px-3 py-2 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.password && <p className="text-sm text-red-600 mb-3">{errors.password.message}</p>}

              <div className="flex gap-3 flex-wrap">
                <NavLink to="/login" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm">Login</NavLink>
                <button type="submit" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm shadow">Signup</button>
                <button type="button" onClick={() => navigate('/adminlogin')} className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">Admin Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;