import { ReactNode } from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import Menubar from "./Menubar/menubar";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen justify-between flex flex-col ">
      <div className="h-1/4   w-full flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="flex h-full w-full  justify-center bg-red-500 ">
          <Menubar />
        </div>
      </div>
      <div className="h-1/2">
        <main className="flex-grow bg-gray-100">{children}</main>
      </div>
      <div className="max-h-1/6 ">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
