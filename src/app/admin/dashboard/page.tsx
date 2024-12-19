import dynamic from "next/dynamic";
const Dashboard = dynamic(()=>import("@/components/dashboard/Dashboard")) 

const DashbordPage = ()=> { 
    return(
        <>
          <Dashboard/>
        </>
    )
}
export default DashbordPage