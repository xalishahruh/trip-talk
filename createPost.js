const Post = require("../model/Post")

module.exports = async (req, res) => {
  try {
    const { location, date, imagelink, title, description } = req.body
    const PostNew = new Post({
      location: location,
      date: date,
      imagelink: imagelink,
      title: title,
      description: description,
    })
    await PostNew.save()
    res.redirect("/manage")
  } catch (error) {
    console.error("Error fetching book:", error)
    res.redirect("/create")
  }
}
