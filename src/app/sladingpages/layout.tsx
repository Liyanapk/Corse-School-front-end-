import Header from "@/components/header/Header";
import dynamic from "next/dynamic";




interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

  return (
    <div>
      <Header />
      <main
        className="overflow-hidden"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
