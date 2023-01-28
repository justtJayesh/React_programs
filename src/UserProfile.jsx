import "./skillsIcon.css";

export default function UserProfile({ name, avatar_url, title, skillsets }) {
  const skill = skillsets.map((el) => (
    <div
      style={{
        border: "1px dashed red",
        display: "flex",
        alignItems: "center"
      }}
    >
      <img className="Icon" src={el.icon} alt="" />
      <span>{el.desc}</span>
    </div>
  ));

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h3>{title}</h3>
        <div>{skill}</div>
      </div>
      <div>
        <img
          style={{ width: "200px", borderRadius: "50%" }}
          src={avatar_url}
          alt="user-profile-pic"
        />
      </div>
    </div>
  );
}
