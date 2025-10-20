import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: 255,
        lowerCase: true,
    },
    email: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minLength: 5,
    },
    mobileNumber: {
        type: String,
        required: [false],
        unique: true,
        trim: true,
        minLength: 10,
        maxLength: 10,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

// {
//   "_id": "64f2c123abc456def7890123",
//   "name": "Madhu Sudhan",
//   "email": "madhu.sudhan@example.com",
//   "password": "securePassword123",
//   "mobileNumber": "9876543210",
//   "createdAt": "2025-10-20T10:00:00.000Z",
//   "updatedAt": "2025-10-20T10:00:00.000Z",
//   "__v": 0
// }
