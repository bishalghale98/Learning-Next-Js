import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface ILesson extends Document {
  course: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const lessonSchema = new Schema<ILesson>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Lesson = mongoose.models.Lesson || mongoose.model<ILesson>("Lesson", lessonSchema);

export default Lesson;
export type { ILesson };
// This code defines a Mongoose schema and model for a Lesson entity.
