import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"


interface Props {
    children: React.ReactNode;
}


const Layout = ({ children }: Props) => {
return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
)
}

export default Layout 