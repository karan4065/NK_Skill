import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    mobileNumber: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },

    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    courseName: {
      type: String,
      required: true,
    },

    collegeName: {
      type: String,
      required: true,
    },

    yearSemester: {
      type: String,
      required: true, // Example: "1st Year" or "Semester 3"
    },

    registrationDate: {
      type: Date,
      default: Date.now,
    },

    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed'],
      default: 'Pending',
    },

    parentName: {
      type: String,
      required: true,
    },

    parentMobileNumber: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

export default mongoose.model('Course', courseSchema);
