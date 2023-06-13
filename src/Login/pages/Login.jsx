import LoginForm from "../components/LoginForm.jsx";
import images from "../../shared/images/images.js";

export default function Login() {
    return (
        <div
            className="w-full h-full absolute flex items-center justify-center bg-center"
            style={{ backgroundImage: `url(${images.loginBg})` }}
        >
            <LoginForm />
        </div>
    );
}