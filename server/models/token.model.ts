import { Schema, model } from 'mongoose';

interface IToken {
  user: Schema.Types.ObjectId;
  refreshToken: string;
}

const tokenSchema = new Schema<IToken>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true }
});

export const Token = model<IToken>('Token', tokenSchema);