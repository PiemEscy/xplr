// app/dash/page.tsx
"use client";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/ui/PageHeader";

export default function DashboardPage() {
  return (
    <AppLayout
      breadcrumbs={[{ label: "Dashboard" }]}
    >
      hello
      {/* page content */}
    </AppLayout>
  );
}
