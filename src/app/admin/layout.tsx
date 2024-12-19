import dynamic from "next/dynamic";
const SideBarPage = dynamic( ()=>import("@/components/sideBar/SideBar") )
const DashboardHeader = dynamic ( ()=>import("@/components/dashborsHeader/Header") ) 

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return(
    <div className="bg-slate-100 min-h-screen w-screen  overflow-x-hidden overflow-y-hidden">  
        <DashboardHeader/>
          <SideBarPage/>
          <main className="overflow-x-hidden">{children}</main>
    </div>
  )
  
};

export default Layout;