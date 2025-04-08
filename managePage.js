const Post = require("../model/Post")

module.exports = async (req, res) => {
  try {
    const posts = await Post.find()
    res.render("manage", { posts })
  } catch (err) {
    console.error("Error rendering manage page:", err)
    res.status(500).send("Error")
  }
}
