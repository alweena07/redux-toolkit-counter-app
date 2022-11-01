import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, remove} from "../../redux/userSlice";

export default function Settings() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const user = useSelector(state => state.user)

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({name,email}))
  }

  const handleRemoveAccount = (e) => {
    e.preventDefault();
    dispatch(remove());
  }
  
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick = {handleRemoveAccount}>Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder= {user.name} name="name" onChange={e => (setName(e.target.value))} />
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email" onChange={e => (setEmail(e.target.value))} />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit" 
                  onClick={(e) => handleUpdate(e)}
          >
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
