import SideBar from "@/common/works/SideBar";
export default function Bloglayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div>
      <SideBar data = {children} />
    </div>
  );
}
