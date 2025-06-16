// app/dashboard/layout.js (Server Component)
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import DashboardClientLayout from "./components/dashboard-client-layout"

export default async function DashboardLayout() {
  const session = await getServerSession()
  if (!session) {
    redirect("/login")
  }
  
  return <DashboardClientLayout session={session} />
}