"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const SideBarPage = dynamic(() => import("@/components/sideBar/SideBar"));
const DashboardHeader = dynamic(() => import("@/components/dashborsHeader/Header"));

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="bg-slate-100 min-h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <DashboardHeader />
      
      
  <SideBarPage onToggle={handleSidebarToggle}/>
  <main
    className="overflow-auto"
    style={{
      marginLeft: isSidebarCollapsed ? "50px" : "273px",
      transition: "margin-left 0.3s ease-in-out",
    }}
  >
    {children}
  </main>


     
  
    </div>
  );
};

export default Layout;
