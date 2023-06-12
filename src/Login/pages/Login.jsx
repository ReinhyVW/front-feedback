import LoginForm from "../components/LoginForm";
import images from "../../shared/images/images";

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