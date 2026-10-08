import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: {
      type: String,
      enum: ['admin', 'management', 'student'],
      required: true,
    },
    phone: { type: String },
    profilePic: { type: String, default: '' },
    rollNo: { type: String },
    course: { type: String },
    semester: { type: Number },
    batch: { type: String },
    department: { type: String },
    designation: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);