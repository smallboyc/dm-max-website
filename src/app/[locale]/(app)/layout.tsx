import Footer from "@/common/Footer";
import Navigation from "@/common/Navigation";
export default function Landinglayout({
  children, params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="max-border-website">
      <Navigation locale={params.locale} />
      {children}
      <Footer />
    </div>
  );
}
