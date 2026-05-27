// app/dash/page.tsx
"use client";
import { AppLayout } from "@/components/layout/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout
      breadcrumbs={[{ label: "xplr" }, { label: "Dashboard" }]}
    >
      {/* page content */}
      Hello World!
    </AppLayout>
  );
}
