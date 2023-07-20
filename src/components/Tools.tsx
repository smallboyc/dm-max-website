"use client";
import SwiperShare from "@/common/swiper/SwiperShare";
import SwiperTools from "@/common/swiper/SwiperTools";
import { Text, Title } from "@/common/typography";
import { useTranslations } from "next-intl";

export default function Tools() {
  const t = useTranslations("tools");
  return (
    <div className="max-w-container flex flex-col items-center gap-10 justify-center">
      <div className="flex flex-col items-center gap-5">
        <Title
          size={Title.size.LARGE}
          color={Title.color.VARIATION}
          weight={Title.weight.BOLD}
        >
          {t("title")}
        </Title>
        <Text
          align={Text.align.CENTER}
          size={Text.size.LARGE}
          color={Text.color.GRAY}
          italic
        >
          {t("subtitle")}
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center space-x-4 bg-slate-100 p-5 rounded-xl hover:scale-105 duration-150 ease-in-out tracking-wider">
          <Text size={Text.size.XXLARGE} weight={Text.weight.BOLD}>
            {t("list_tools")}
          </Text>
          <SwiperTools />
        </div>
        <div className="flex items-center space-x-4 bg-slate-100 p-5 rounded-xl hover:scale-105 duration-150 ease-in-out tracking-wider">
          <Text size={Text.size.XXLARGE} weight={Text.weight.BOLD}>
            {t("list_share")}
          </Text>
          <SwiperShare />
        </div>
      </div>
    </div>
  );
}
