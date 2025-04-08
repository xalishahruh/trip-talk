const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

// Controllers
const HomeController = require("./controller/homePage")
const getPostController = require("./controller/getPost")
const ManageController = require("./controller/managePage")
const createPageController = require("./controller/createPage")
const PostCreate = require("./controller/createPost")
const EditPageController = require("./controller/updatePage")
const EditPostController = require("./controller/updatePost")
const DeletePost = require("./controller/deletePost")

const app = express()
const dbLink = "mongodb+srv://myproject:qkax0Lrusxravna3@triptalk.yqkprz6.mongodb.net/"

if (dbLink) {
  try {
    mongoose.connect(dbLink)
    console.log("Databse connected successfully")
  } catch (error) {
    console.log("Database connection error: ", error)
  }
}
// optimizing
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// rendering pages
app.get("/", HomeController)
app.get("/manage", ManageController)
app.get("/create", createPageController)
app.post("/create", PostCreate)
app.get("/edit/:id", EditPageController)
app.post("/edit/:id", EditPostController)
app.get("/post/:id", getPostController)
app.post("/delete/:id", DeletePost)

app.listen(5000, () => {
  console.log("Server has been started on Port 5000")
})
