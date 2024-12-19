import dynamic from "next/dynamic";
const Profile = dynamic( ()=>import ("@/components/profile/Profile"))

const ProfilePage = ()=> { 
    return(
        <>
         <Profile/>
        </>
    )
}
export default ProfilePage