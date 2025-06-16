import AuthLayout from "@/app/(auth)/authLayout";
import RegisterForm from "@/components/features/auth/register-form";
import { Navbar } from "@/components/layout/navbarLayout";
import AppToaster from "@/components/ui/Toaster";
export default function RegisterPage() {
    return (
        <div>
            <AppToaster/>
        <Navbar />
        <AuthLayout>
        <RegisterForm />
        </AuthLayout>
        </div>
    );
    }