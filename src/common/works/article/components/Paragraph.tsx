import { Text, Title } from "@/common/typography";
export default function Paragraph({ data }: any) {
  return (
    <div className="flex flex-col gap-5 py-20 mx-auto max-w-4xl px-12">
      <Title
        size={Title.size.XLARGE}
        weight={Title.weight.BOLD}
        color={Title.color.PRIMARY}
      >
        {data.title}
      </Title>
      <div className="leading-8">
        <Text size={Text.size.NORMAL}>{data.paragraph}</Text>
      </div>
    </div>
  );
}
