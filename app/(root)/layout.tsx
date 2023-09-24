import Footer from "@/components/footer";
import NavBar from "@/components/navBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto max-w-[1366px] ">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default layout