import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface ICourse extends Document {
  title: string;
  description: string;
  duration: string;
  price: number;
  category: mongoose.Types.ObjectId;
  lessons: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Course = mongoose.models.Course || mongoose.model<ICourse>("Course", courseSchema);
export default Course;
// This code defines a Mongoose schema and model for a Course entity.
