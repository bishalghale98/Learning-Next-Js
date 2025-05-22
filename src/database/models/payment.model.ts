import mongoose from "mongoose";

const Schema = mongoose.Schema;

enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

interface IPayment extends Document {
  student: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  amount: number;
  status: PaymentStatus;
  paymentDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const paymentSchema = new Schema<IPayment>({
  student: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: [
      PaymentStatus.COMPLETED,
      PaymentStatus.PENDING,
      PaymentStatus.FAILED,
    ],
    required: true,
    default: PaymentStatus.PENDING,
  },
  paymentDate: {
    type: Date,
    default: Date.now(),
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

const Payment =
  mongoose.models.Payment || mongoose.model<IPayment>("Payment", paymentSchema);
export default Payment;
export type { IPayment, PaymentStatus };
// This code defines a Mongoose schema and model for a Payment entity.
// The Payment entity is used to track payments made by students for courses.
