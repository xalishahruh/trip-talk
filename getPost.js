const Post = require("../model/Post")

module.exports = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render("inside", { post })
}
