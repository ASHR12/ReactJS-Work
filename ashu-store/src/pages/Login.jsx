// Login.jsx
import { useDispatch } from "react-redux";
import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { performLogin } from "../features/user/userActions"; // Adjust the import path as necessary
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginDetails = {
      identifier: formData.get("identifier"),
      password: formData.get("password"),
    };

    dispatch(performLogin({ loginDetails }))
      .unwrap()
      .then(() => {
        navigate("/");
        toast.success(`Logged in successfully`);
      })
      .catch((error) => {
        toast.error("Failed to log in: " + error);
      });
  };

  const handleGuestLogin = () => {
    const guestCredentials = {
      identifier: "test@test.com",
      password: "secret",
    };

    dispatch(performLogin({ loginDetails: guestCredentials }))
      .unwrap()
      .then(() => {
        navigate("/"); // Adjust the navigation target as needed
        toast.success(`Logged in successfully as Guest"}`);
      })
      .catch((error) => {
        toast.error("Failed to log in: " + error);
      });
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        onSubmit={handleSubmit}
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={handleGuestLogin}
        >
          Guest User
        </button>
        <p className="text-center">
          Not a member yet ?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
