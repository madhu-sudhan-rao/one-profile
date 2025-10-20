import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true,
    },
    price: {
      type: Number,
      required: [true, "Subscription amount is required"],
      min: [0, "Price must be greater than 0"],
    },
    currency: {
      type: String,
      enum: ["INR", "USD", "EUR"],
      default: "INR",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
      default: "Monthly",
    },
    category: {
      type: String,
      enum: ["Entertainment", "Education", "Productivity", "Health", "Other"],
      default: "Other",
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start date must be in the past",
      },
    },
    endDate: {
      type: Date,
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
            return value > this.startDate;
        },
        message: "Renewal date must be after the start date",
      },
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "paused", "expired"],
      default: "Active",
    },
    paymentMethod: {
      type: String,
      trim: true,
      enum: ["Credit Card", "Debit Card", "UPI", "Net Banking", "Other"],
    },
    notes: {
      type: String,
      trim: true,
      maxLength: 500,
    },
  },
  { timestamps: true }
);

subscriptionSchema.pre('save', function (next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        }

        this.renewalDate = new Date(this.startDate)
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency])
        
    }

    // Auto update the status if renewal date is past
    if(this.renewalDate < new Date()) {
        this.status = 'expired'
    }

    next();
})



export default mongoose.model("Subscription", subscriptionSchema);
