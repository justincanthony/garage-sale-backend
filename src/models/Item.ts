import mongoose, { Schema, Document } from "mongoose";

export interface IPhoto {
  url: string;        // public S3 URL once uploaded
  key: string;        // S3 object key (for later deletion)
}

export interface IItem extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  photos: IPhoto[];
  isSold: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PhotoSchema = new Schema<IPhoto>({
  url: { type: String, required: true },
  key: { type: String, required: true }
});

const ItemSchema = new Schema<IItem>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    photos: { type: [PhotoSchema], default: [] },
    isSold: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model<IItem>("Item", ItemSchema);
