import Footer from "@/common/Footer";
import Navigation from "@/common/Navigation";
export default function Landinglayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div className="max-border-website">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
