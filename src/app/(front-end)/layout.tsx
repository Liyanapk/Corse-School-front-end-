import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/footer/Footer"));
const Header = dynamic(() => import("@/components/header/Header"));

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-[80px]">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
