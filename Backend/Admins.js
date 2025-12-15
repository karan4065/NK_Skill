import bcrypt from "bcryptjs";

const admins = [
  {
    username: "admin@gmail.com",
    password: bcrypt.hashSync("divyansh", 10),
  },
];


const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
import mongoose from 'mongoose'
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;

// import bcrypt from "bcryptjs";

// export const addHardcodedAdmin = async () => {
//   try {
//     const adminExists = await Admin.findOne({
//       username: "admin@gmail.com",
//     });

//     if (adminExists) {
//       console.log("Admin already exists");
//       return;
//     }

//     const hashedPassword = bcrypt.hashSync("divyansh", 10);

//     await Admin.create({
//       username: "admin@gmail.com",
//       password: hashedPassword,
//     });

//     console.log("Hardcoded admin added successfully");
//   } catch (error) {
//     console.error("Error adding hardcoded admin:", error.message);
//   }
// };
// addHardcodedAdmin();
