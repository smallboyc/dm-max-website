import SwiperShare from "@/common/swiper/SwiperShare";
import SwiperTools from "@/common/swiper/SwiperTools";
import { Text, Title } from "@/common/typography";

export default function Tools() {
  return (
    <div className="max-w-container flex flex-col items-center gap-10 justify-center">
      <div className="flex flex-col items-center gap-5">
        <Title
          size={Title.size.LARGE}
          color={Title.color.VARIATION}
          weight={Title.weight.BOLD}
        >
          tools
        </Title>
        <Text align={Text.align.CENTER} size={Text.size.LARGE}>
          I work with different software and programming languages to design my
          different works!
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center space-x-4 bg-slate-100 p-5 rounded-xl hover:scale-105 duration-150 ease-in-out tracking-wider">
          <Text size={Text.size.EXTRA}>I use</Text>
          <SwiperTools />
        </div>
        <div className="flex items-center space-x-4 bg-slate-100 p-5 rounded-xl hover:scale-105 duration-150 ease-in-out tracking-wider">
          <Text size={Text.size.EXTRA}>I share with</Text>
          <SwiperShare />
        </div>
      </div>
    </div>
  );
}
