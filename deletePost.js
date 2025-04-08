const Post = require("../model/Post")

module.exports = async (req, res) => {
  try {
    const postId = req.params.id
    await Post.findByIdAndDelete(postId)
    res.redirect("/manage")
  } catch (error) {
    console.log("Error during deleting: ", error)
  }
}
