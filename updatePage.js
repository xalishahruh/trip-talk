const Post = require("../model/Post")

module.exports = async (req, res) => {
  try {
    const PostId = req.params.id
    const post = await Post.findById(PostId)

    if (!post) {
      console.log("Post not found")
      return res.redirect("/manage")
    }

    res.render("update", { post })
  } catch (error) {
    console.error("Error fetching book:", error)
    res.redirect("/manage")
  }
}
