import { Text } from "@/common/typography";
export default function Paragraph({ data }: any) {
  return (
    <>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        {data.title}
      </h2>
      <div className="text-sm">
        <Text>{data.paragraph}</Text>
      </div>
    </>
  );
}
