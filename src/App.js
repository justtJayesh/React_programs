import "./styles.css";

import UserProfile from "./UserProfile";

export default function App() {
  return (
    <div className="App">
      <UserProfile
        name={"Jayesh Mate"}
        avatar_url={"https://avatars.githubusercontent.com/u/115465646?v=4"}
        title={"Frontend Developer"}
        skillsets={[
          {
            icon: "https://img.icons8.com/office/512/react.png",
            desc: "React"
          },
          {
            icon: "https://img.icons8.com/office/512/react.png",
            desc: "React"
          },
          {
            icon: "https://img.icons8.com/office/512/react.png",
            desc: "React"
          },
          {
            icon: "https://img.icons8.com/office/512/react.png",
            desc: "React"
          },
          {
            icon: "https://img.icons8.com/office/512/react.png",
            desc: "React"
          }
        ]}
      />
    </div>
  );
}
