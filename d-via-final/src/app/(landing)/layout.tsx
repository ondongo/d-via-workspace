
"use client";
import Header from "@/components/organisms/HeaderDvia";
import Footer from "@/components/organisms/FooterDvia";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BottomActionButton } from "@d-via/design-system";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="overflow-hidden pb-20 md:pb-0 ">
          <Header />
          {children}
          <Footer />
        </div>
        <BottomActionButton
          label="Commencer maintenant"
          onClick={() => console.log('Action mobile')}
          showOnMobile={true}
          showOnDesktop={false}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
          className="custom-toast"
        />
      </body>
    </html>
  );
}
