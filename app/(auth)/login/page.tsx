import GuestLayout from "@/components/layout/guest/GuestLayout";
import LoginBrandingPanel from "./login_components/LoginBrandingPanel";
import LoginFormPanel from "./login_components/LoginFormPanel";

export default function LoginPage() {
  return (
    <GuestLayout variant="auth">
      <div className="flex flex-1 overflow-hidden relative">
        {/* Glow overlay */}
        <LoginBrandingPanel />
        <LoginFormPanel />
      </div>
    </GuestLayout>
  );
}
