import  { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/Store/auth";
import './login.css'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/users"); // مسیر بعد از لاگین
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // چک کردن اطلاعات فیک
    if (form.username === "admin" && form.password === "123456") {
      localStorage.setItem("user", JSON.stringify(form));
      dispatch(loginUser(form));
      navigate("/users");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">ورود به پنل ادمین </h2>
  
        {error && <p className="login-error">{error}</p>}
  
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="نام کاربری"
          className="login-input"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="رمز عبور"
          className="login-input"
        />
        <button type="submit" className="login-button">
          ورود
        </button>
      </form>
    </div>
  );
  };

export default Login;
