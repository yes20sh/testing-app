import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
