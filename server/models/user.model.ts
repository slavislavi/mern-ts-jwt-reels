import { Schema, model } from 'mongoose';

interface IUser {
  email: string;
  password: string;
  isActivated: Boolean;
  activationLink: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export const User = model<IUser>('User', userSchema);