import { useEffect, useState } from "react";
import { Logo } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import { performRegister, performLogin } from "../features/user/userActions"; // Assuming these actions are defined
import { toast } from "react-toastify";
const Register = () => {
  const { user, isLoading } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated to useNavigate

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/"); // Updated method for redirection
    }
  }, [user, navigate]);

  // Form state for registration and login
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for both login and registration
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Perform login
      dispatch(performLogin({ loginDetails: values }))
        .unwrap()
        .then(() => {
          navigate("/"); // Adjust the navigation target as needed
          toast.success(`Logged in successfully`);
        })
        .catch((error) => {
          // console.log("error", error);
          const message = error || "Failed to Login."; // Fallback message if the path is not found
          toast.error("Failed to Login: " + message);
        });
    } else {
      // Perform registration
      dispatch(performRegister({ registerDetails: values }))
        .unwrap()
        .then(() => {
          navigate("/"); // Adjust the navigation target as needed
          toast.success(`Registration successfully"}`);
        })
        .catch((error) => {
          // console.log("error", error);
          const message = error || "Failed to register."; // Fallback message if the path is not found
          toast.error("Failed to register: " + message);
        });
    }
  };

  // Toggle between login and registration
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{isLogin ? "Login" : "Register"}</h3>
        {!isLogin && (
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={values.name}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Please wait..." : isLogin ? "Login" : "Register"}
        </button>
        <p>
          {isLogin ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleLogin} className="member-btn">
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
