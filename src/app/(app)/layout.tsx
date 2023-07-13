import Navigation from "@/common/Navigation";
export default function Landinglayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
