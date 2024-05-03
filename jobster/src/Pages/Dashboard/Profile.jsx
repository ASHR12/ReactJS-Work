import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userActions"; // Adjust the import path as necessary
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const ProfilePage = () => {
  const { user, isLoading } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    lastName: user.lastName,
    location: user.location,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData))
      .unwrap()
      .then(() => {
        toast.success(`Profile Updated successfully`);
      })
      .catch((error) => {
        // console.log("error", error);
        const message = error || "Failed to update profile."; // Fallback message if the path is not found
        toast.error("Failed to update profile: " + message);
      });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            className="form-input"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            className="form-input"
            value={formData.location}
            onChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ProfilePage;
