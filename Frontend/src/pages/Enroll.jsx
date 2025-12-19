import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

const Enroll = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    fullName: "",
    emailId: "",
    mobileNumber: "",
    gender: "",
    dateOfBirth: "",
    state: "",
    courseName: serviceId.replace(/-/g, " "),
    collegeName: "",
    yearSemester: "",
    parentName: "",
    parentMobileNumber: "",
  });

  // 🔒 Protect page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  // 🔢 Only numbers for phone
  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION
  const validateForm = () => {
    if (formData.mobileNumber.length !== 10) {
      toast.error("Student mobile number must be 10 digits");
      return false;
    }

    if (formData.parentMobileNumber.length !== 10) {
      toast.error("Parent mobile number must be 10 digits");
      return false;
    }

    if (!formData.gender) {
      toast.error("Please select gender");
      return false;
    }

    if (!formData.dateOfBirth) {
      toast.error("Please select date of birth");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");

     await axios.post(
  `${import.meta.env.VITE_APP}/api/enroll`,
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);


      toast.success("Enrollment Successful 🎉");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Enrollment failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Toaster />

      <div className="flex justify-center items-center px-4 py-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <h2 className="col-span-full text-3xl font-bold text-center text-purple-600">
            Course Enrollment
          </h2>

          <input name="studentId" placeholder="Student ID" onChange={handleChange} required />
          <input name="fullName" placeholder="Full Name" onChange={handleChange} required />

          <input type="email" name="emailId" placeholder="Email" onChange={handleChange} required />

          <input
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            maxLength="10"
            onChange={handleNumberChange}
            required
          />

          <select name="gender" onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input type="date" name="dateOfBirth" onChange={handleChange} required />
          <input name="state" placeholder="State" onChange={handleChange} required />
          <input name="collegeName" placeholder="College Name" onChange={handleChange} required />
          <input name="yearSemester" placeholder="Year / Semester" onChange={handleChange} required />

          {/* Disabled for UI */}
          <input
            value={formData.courseName}
            disabled
            className="bg-gray-100 cursor-not-allowed"
          />

          {/* Hidden for submit */}
          <input type="hidden" name="courseName" value={formData.courseName} />

          <input name="parentName" placeholder="Parent Name" onChange={handleChange} required />

          <input
            name="parentMobileNumber"
            placeholder="Parent Mobile Number"
            value={formData.parentMobileNumber}
            maxLength="10"
            onChange={handleNumberChange}
            required
          />

          <button
            type="submit"
            className="col-span-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
