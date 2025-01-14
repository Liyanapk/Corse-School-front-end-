import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/footer/Footer"));
const Header = dynamic(() => import("@/components/header/Header"));

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
