const input = document.getElementById("imagelink")
const preview = document.getElementById("preview")
const description = document.getElementById("description")
const charCount = document.getElementById("charCount")

// When input loses focus
input.addEventListener("blur", () => {
  const url = input.value.trim()

  // If it's a valid-looking URL, show preview
  if (url) {
    preview.src = url
    preview.style.display = "block"
  }
})

preview.style.display = "none"
// When input is focused again, hide the preview
input.addEventListener("focus", () => {
  preview.style.display = "none"
})

charCount.textContent = `Min 300 characters`
description.addEventListener("input", () => {
  const len = description.value.length
  charCount.textContent = `${len} / 300 characters`
  charCount.style.color = len < 300 ? "red" : "green"
})
