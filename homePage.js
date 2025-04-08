const Post = require("../model/Post")

module.exports = async (req, res) => {
  try {
    const posts = await Post.find()
    res.render("home", { posts })
  } catch (error) {
    console.error("Fetching error posts:", error)
    res.status(500).send("Internal Server Error")
  }
}
