const Post = require("../model/Post")

module.exports = async (req, res) => {
  try {
    const PostId = req.params.id
    const { location, date, imagelink, title, description } = req.body
    const post = await Post.findById(PostId)

    if (!post) {
      return res.redirect("/manage")
    }

    post.location = location
    post.date = date
    post.imagelink = imagelink
    post.title = title
    post.description = description

    await post.save()
    res.redirect("/manage")
  } catch (error) {
    console.error("Error fetching book:", error)
    res.redirect("/manage")
  }
}
