import AuthLayout from "@/components/layout/authLayout";
import LoginForm from "@/components/features/auth/login-form";
import { Navbar } from "@/components/layout/navbarLayout";

export default function LoginPage() {
    return (
        <div>
        <Navbar/>
        <AuthLayout>
        <LoginForm />
        </AuthLayout>
        </div>
    );
    }