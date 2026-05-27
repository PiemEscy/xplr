import GuestLayout from "@/components/layout/guest/GuestLayout";
import GuestContainer from "@/components/layout/guest/GuestContainer";
import RegisterFormPanel from "./register_components/RegisterFormPanel";

export default function RegisterPage() {
  return (
    <GuestLayout variant="auth">
      <GuestContainer maxWidth="md" centered>
        <RegisterFormPanel />
      </GuestContainer>
    </GuestLayout>
  );
}
