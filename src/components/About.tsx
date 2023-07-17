import { Title } from "@/common/typography";
import { Text } from "@/common/typography";
import Image from "next/image";

export default function About() {
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
      <div className="flex flex-col mx-auto max-w-2xl lg:max-w-4xl gap-8">
        <div className="flex flex-col items-center gap-5">
          <Title
            size={Title.size.LARGE}
            color={Title.color.VARIATION}
            weight={Title.weight.BOLD}
          >
            about
          </Title>
          <Text size={Text.size.LARGE}>
            Let&apos;s quickly talk about this little boy!
          </Text>
        </div>
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className=" leading-8  sm:leading-9">
              <Text size={Text.size.LARGE} weight={Text.weight.BOLD}>
                Engineering school student in Champs-sur-Marne (Paris) ,
                I&apos;m passionate about{" "}
                <span className="text-variation">digital creation</span>.
                Between development, drawing, video or animation, I like to
                bring my ideas to life through{" "}
                <span className="text-variation">different technologies</span>.
              </Text>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <Image
              className="rounded-xl bg-indigo-50 lg:rounded-3xl"
              src="/images/me.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <figcaption className="lg:col-start-1 lg:row-start-3">
            <Text
              size={Text.size.NORMAL}
              color={Text.color.DARK}
              weight={Text.weight.SEMIBOLD}
            >
              Maxence Dupuis
            </Text>
            <div className="mt-1 text-gray-500">
              <Text size={Text.size.NORMAL} color={Text.color.GRAY}>
                Creative Student
              </Text>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
