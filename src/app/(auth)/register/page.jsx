import AuthLayout from "@/components/layout/authLayout";
import RegisterForm from "@/components/features/auth/register-form";
import { Navbar } from "@/components/layout/navbarLayout";
export default function RegisterPage() {
    return (
        <div>
        <Navbar />
        <AuthLayout>
        <RegisterForm />
        </AuthLayout>
        </div>
    );
    }