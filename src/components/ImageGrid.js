import React from "react";
import { useSelector } from "react-redux";
import { ImageCard } from "./ImageCard";
export default function ImageGrid() {
  const fetched_images = useSelector((state) => state.imageReducer.images);
  // console.log(fetched_images);
  return (
    <div className="flex flex-wrap justify-evenly">
      {!fetched_images ? (
        <span>Nothing to Show !</span>
      ) : (
        // console.log("lets see->>", fetched_images)
        fetched_images.map((item) => {
          return <ImageCard key={item.id} image={item} />;
        })
      )}
    </div>
  );
}
