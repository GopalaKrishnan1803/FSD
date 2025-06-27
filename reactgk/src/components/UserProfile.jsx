import React, { udeState } from "react";
function UserProfile() {
  const [User, setUser] = useState({
    name: "Krishna",
    age: "22",
    email: "krishh@gmail.com",
    location: "Namakkal",
  });

  const [hobbies, setHobbies] = useState(["Reading", "Travling"]);
  const [NewHobby] = useState("");
  const handleUpdateLocation = () => {
    setUser((User) => ({
      ...prevUser,
      location: "Namakkal",
      state: "Tamilnadu",
    }));
  };
  const addHobby = () => {
    setHobbies((pevhobbies) => [...prevHobbies, NewHobby]);
    setNewHobby("");
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name : {User.name}</p>
      <p>Age : {User.age}</p>
      <p>Email : {User.email}</p>
      <p>location : {User.location}</p>
      <p>State : {User.state}</p>

      <button onClick={handleUpdateLocation}>Update Location</button>
      <h3>Hobbies</h3>
      <div style={{ margin: "10px" }}>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        <input
          type="text"
          value={NewHobby}
          onChange={(e) => setNewHobby(e.target.value)}
          placeholder="Enter a New Hobby"
        />
        <button onClick={addHobby}>ADD Hobby</button>
      </div>
    </div>
  );
}

export default UserProfile;
