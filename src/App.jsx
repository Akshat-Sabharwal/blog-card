import "./App.css";
import illustration from "./assets/images/illustration.svg";
import avatar from "./assets/images/avatar.webp";

export const App = () => {
  return (
    <div class="card flex">
      <img src={illustration} alt="Illustration" class="image" />
      <span class="tag">
        <p class="tag-info">Learning</p>
      </span>
      <p class="info">Published 21 Dec 2023</p>
      <h1 class="header">HTML & CSS foundations</h1>
      <p class="description">
        These languages are the backbone of every website, defining structure
        content, and presentation
      </p>
      <div
        class="profile flex"
        style={{
          flexFlow: "row nowrap",
          alignItems: "center",
        }}
      >
        <img src={avatar} alt="Avatar" />
        <p class="tag-info">Greg Hooper</p>
      </div>
    </div>
  );
};
