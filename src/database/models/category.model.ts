import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface ICategory extends Document {
  name: string;
  description: string;
  createdAt: Date;
}

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


const Category = mongoose.models.Category || mongoose.model<ICategory>("Category", categorySchema);

export default Category;
export type { ICategory };
// This code defines a Mongoose schema and model for a Category entity.