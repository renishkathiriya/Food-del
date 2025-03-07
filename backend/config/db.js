import mongoose from "mongoose";

export const connectDB = async () => {
      await mongoose.connect('mongodb+srv://master87991:MuBzgui5oJvMB69D@cluster0.o3rxe.mongodb.net/food-del').then(()=>console.log("DB Connected :)"));
}
