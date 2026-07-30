import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/nav-bar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
