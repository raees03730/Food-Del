import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ransari60212_db_user:Raees2006@cluster0.qm5qbvo.mongodb.net/FOOD-DEL').then(()=>console.log("DB Connected"));
}
