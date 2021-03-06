import mongoose from "mongoose";
const { Schema } = mongoose;

const phoneNumberQuestionSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  optional: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  exampleInput: {
    type: String,
    default: "",
  },
  validateByOtp: {
    type: Boolean,
    default: false,
  },
});

const PhoneNumberQuestion = mongoose.model("tel", phoneNumberQuestionSchema);

export default PhoneNumberQuestion;
