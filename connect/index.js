const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatar: { type: String, default: "https://via.placeholder.com/150x150" },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    default: "USER",
    enum: ["ADMIN", "USER"],
  },
});
export const User = mongoose.model("User", UserSchema);

export default mongoose;
