import mongoose from "mongoose";
import Blog from "./models/Blog.js"

mongoose.connect("mongodb+srv://eric:12345eric@cluster0.jpzob5l.mongodb.net/?retryWrites=true&w=majority");

const article = new Blog({
    title:"Blog do Eric",
    slug:"Mais um blog qualquer",
    published: true,
    content: "Heloo world!",
    tags:['DB','Evolucionario'],
 });
 
 await article.save();
 
 const firstArticle = await Blog.findOne({});
 console.log(firstArticle);