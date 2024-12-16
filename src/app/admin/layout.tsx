import SideBarPage from "@/components/sideBar/SideBar";
import DashboardHeader from "@/components/dashborsHeader/Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return(
    <div className="bg-slate-100 min-h-screen w-screen flex flex-col overflow-x-hidden overflow-y-hidden">  
        <DashboardHeader/>
        <SideBarPage/>
        <main>{children}</main>
        
    </div>
  )
  
};

export default Layout;