import SideBarPage from "@/components/sideBar/SideBar";
import DashboardHeader from "@/components/dashborsHeader/Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return(
    <>  
        <DashboardHeader/>
        <SideBarPage/>
        <div className="bg-slate-100 h-screen w-screen">{children}</div>
        
    </>
  )
  
};

export default Layout;