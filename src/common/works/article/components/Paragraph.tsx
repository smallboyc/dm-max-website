import { Text, Title } from "@/common/typography";
export default function Paragraph({ data }: any) {
  return (
    <div className="flex flex-col gap-6">
      <Title
        size={Title.size.XXLARGE}
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
