import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  images: [
    {
      id: 1,
      imgURL:
        "https://pbs.twimg.com/profile_images/1679147130483613696/fN5Jq_f4_400x400.jpg",
      title: "nothing",
      description: "cool design, awesome specs",
      views: 0,
    },
  ],
};

export const imageSlice = createSlice({
  name: "imageDetails",
  initialState,
  reducers: {
    addImage: (state, action) => {
      const img = {
        id: nanoid(),
        imgURL: action.payload.imgURL,
        title: action.payload.title,
        description: action.payload.description,
        views: 0,
      };
      state.images.push(img);
      // console.log("Upload Action->", img);
    },
    incrementViews: (state, action) => {
      // console.log("increment->", action.payload.id);
      state.images.forEach((item) => {
        if (item.id === action.payload.id) {
          item.views += 1;
        }
      });
    },
  },
});

export const { addImage, incrementViews } = imageSlice.actions;
export default imageSlice.reducer;
