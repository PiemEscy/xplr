import GuestLayout from "@/components/layout/guest/GuestLayout";
import GuestContainer from "@/components/layout/guest/GuestContainer";
import ForgotPasswordFormPanel from "./forgot_components/ForgotPasswordFormPanel";

export default function ForgotPasswordPage() {
  return (
    <GuestLayout variant="auth">
      <GuestContainer maxWidth="md" centered>
        <ForgotPasswordFormPanel />
      </GuestContainer>
    </GuestLayout>
  );
}
