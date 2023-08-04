import React from "react";
import { useState } from "react";
import api from "../axios";

import "./css/form.css";

const defaultValues = {
  name: "",
  title: "",
  content: "",
  category: "",
};
export default function Form() {
  const [values, setValues] = useState(defaultValues);
  const [image, setImage] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const changeInputHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      image?.length === 0 ||
      values.category === "" ||
      values.title === "" ||
      values.content === ""
    ) {
      setErrorMsg("Kindly fill all the required fields");
    } else {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("username", values.username);
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("category", values.category);
      api.post("/", formData).then((res) => console.log(res));
    }
  };
  return (
    <div className="containers container">
      <h2 className="form-h2">New Post</h2>
      <h2 className="form-h2">{errorMsg}</h2>
      <form id="bountifulForm" onSubmit={submitFormHandler}>
        <div className="form-group">
          <label htmlFor="image">Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={changeImageHandler}
            id="image"
            name="image"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={changeInputHandler}
            id="username"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={changeInputHandler}
            id="title"
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            onChange={changeInputHandler}
            name="content"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            onChange={changeInputHandler}
            name="category"
            required
          >
            <option value="">Select post category</option>
            <option value="Tech">Tech</option>
            <option value="Food">Food</option>
            <option value="News">News</option>
            <option value="Politics">Politics</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
