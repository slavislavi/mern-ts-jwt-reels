import { Schema, model } from 'mongoose';

export interface Token {
  user: Schema.Types.ObjectId;
  refreshToken: string;
}

const tokenSchema = new Schema<Token>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true }
});

export const TokenModel = model<Token>('Token', tokenSchema);