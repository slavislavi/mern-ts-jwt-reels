import { Document, Schema, model } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  isActivated: Boolean;
  activationLink: string;
}

const userSchema = new Schema<User>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export const UserModel = model<User>('User', userSchema);