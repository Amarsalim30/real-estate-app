import AuthLayout from "@/components/layout/authLayout";
import LoginForm from "@/components/features/auth/login-form";
import { Navbar } from "@/components/layout/navbarLayout";
import AppToaster from "@/components/ui/Toaster";
export default function LoginPage() {
    return (
        <div>
        <AppToaster />
        <Navbar/>
        <AuthLayout>
        <LoginForm />
        </AuthLayout>
        </div>
    );
    }