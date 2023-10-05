import { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../features/imageDetails/imageSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SimpleRegistrationForm() {
  const [img, setImg] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    if (img === "") {
      toast.error("upload an Image!");
      return;
    }
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "jatin2003");
    data.append("cloud_name", "dxke76kt0");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dxke76kt0/image/upload",
        {
          method: "post",
          body: data,
        }
      );

      const json = await res.json();
      // console.log(json.url);
      dispatch(
        addImage({
          imgURL: json.url,
          title: title,
          description: desc,
        })
      );
    } catch (error) {
      console.log("Error uploading image to cloud");
    }
    setDesc("");
    setTitle("");
    setImg("");

    toast.success("Image Successfully uploaded!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <h1 className="container-md m-auto text-center text-3xl bg-blue-200 p-5 font-bold ">
        Image_Cloud
      </h1>
      <div className="flex flex-wrap justify-center mt-10 bg-blue-100 items-center p-4 w-auto max-w-md m-auto rounded-3xl">
        <input type="file" onChange={(e) => setImg(e.target.files[0])}></input>{" "}
        <button
          className="p-3 text-center rounded-lg bg-orange-100 text-black"
          onClick={handleSubmit}
        >
          Upload
        </button>
        <div className="m-5 flex flex-wrap flex-col items-center">
          <div className="m-3">
            <label className="font-semibold px-4">Title:</label>
            <input
              type="text"
              className="w-auto p-5"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="m-3">
            <label className="font-semibold px-4">Desc:</label>
            <input
              type="textarea"
              className="w-auto p-5"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
