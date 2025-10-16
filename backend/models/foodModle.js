import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  discripton: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const foodModel = mongoose.model.food || mongoose.model("food", foodSchema);

export default foodModel;
