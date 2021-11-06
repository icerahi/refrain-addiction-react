import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
 
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from?.pathname || "/";
  const { signInWithGoogle, createUser, emailPasswordLogin,error,setError } = useAuth();
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

 

  const onSubmit = (data) => {
    setError("");
    if (isLogin) {
      emailPasswordLogin(data.email, data.password)
        .then((result) => history.push(redirect_uri))
        .catch((err) => setError(err.message));
    } else {
      createUser(data.email, data.password)
        .then((result) => history.push(redirect_uri))
        .catch((err) => setError(err.message));
    }
  };

  const handleGoogleLogin = () => {
    setError("");
    signInWithGoogle()
      .then(() => history.push(redirect_uri))
      .catch((err) => setError(err.message));
  };

  const toggleLogin = () => {
    setError("");
    setIsLogin(true);
  };
  const toggleRegister = () => {
    setError("");
    setIsLogin(false);
  };

  useEffect(()=>{
    // when use come from public route empty error message 
  redirect_uri === '/' && setError('')
    window.scrollTo(0,0)
  },[location])
 
 
  return (
    <div className="container">
      <div className="col-md-6 mx-auto  my-5 p-5">
        <button onClick={handleGoogleLogin} className="btn btn-dark fs-5">
          <img
            width="5% m-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          <span> Continue with Google</span>
        </button>
        <h5 className="text-center">
          {" "}
          OR <hr className="w-50 mx-auto" />{" "}
        </h5>
        <h4 className="text-center">{isLogin ? "Login" : "Register"}</h4>

        <p className="text-center text-danger"> {error && error} </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="w-75  mx-auto  m-2">
            <input
              type="email"
              placeholder="Your Email"
              className="form-control"
              defaultValue=""
              {...register("email")}
            />
          </div>
          {/* include validation with required or other standard HTML validation rules */}
          <div className="w-75  mx-auto py-2 m-2">
            <input
              type="password"
              placeholder="Your Password"
              className="form-control"
              {...register("password", { required: true })}
            />
          </div>{" "}
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="btn btn-success d-block w-50 mx-auto fw-bolder py-2"
            type="submit"
            value={isLogin ? `Login` : "Register"}
          />
        </form>
        {isLogin ? (
          <p className="text-center my-2 lead">
            Haven't any account?{" "}
            <button onClick={toggleRegister} className="loginRegisterBtn">
              Register Now
            </button>{" "}
          </p>
        ) : (
          <p className="text-center my-2 lead">
            Already have an account?{" "}
            <button onClick={toggleLogin} className="loginRegisterBtn  ">
              Login Now
            </button>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
