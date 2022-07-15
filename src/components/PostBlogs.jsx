import React, { useState, useEffect } from "react"
import axios from "axios"

const PostBlogs = () => {
  const [blogName, setBlogName] = useState("")
  const [blogImage, setBlogImage] = useState("")
  const [blogDescription, setBlogDescription] = useState("")

  const data = {
    blogName: blogName,
    blogImage: blogImage,
    blogDescription: blogDescription,
  }

  useEffect(() => {
    axios
      .post("/api/blogs", data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [data])

  return (
    <div>
      <form>
        <label>
          Blog Image:
          <input type="file" name="image" value={(e) => setBlogImage(e)} />
        </label>
        <label>
          Blog Name:
          <input
            type="text"
            name="name"
            placeholder="Blog Name"
            value={(e) => setBlogName(e)}
          />
        </label>
        <label>
          Blog Description:
          <input
            type="text"
            name="name"
            placeholder="Blog Name"
            value={(e) => setBlogDescription(e)}
          />
        </label>
      </form>
    </div>
  )
}

export default PostBlogs
