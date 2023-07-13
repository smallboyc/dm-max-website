import classNames from "classnames";
import { ReactNode } from "react";

enum Tag {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

enum Color {
  PRIMARY,
  VARIATION,
  DARK,
  GRAY,
  WHITE,
}

enum Align {
  LEFT,
  RIGHT,
  CENTER,
}
enum Size {
  SMALL,
  NORMAL,
  MEDIUM,
  LARGE,
  XLARGE,
  XXLARGE,
  XXXLARGE,
  EXTRA,
}

enum Weight {
  LIGHT,
  NORMAL,
  MEDIUM,
  SEMIBOLD,
  BOLD,
  EXTRABOLD,
}

enum Spacing {
  WIDE,
  WIDER,
  WIDEST,
}

interface Props {
  tag?: Tag;
  color?: Color;
  weight?: Weight;
  children?: ReactNode;
  align?: Align;
  size?: Size;
  spacing?: Spacing;
  onClick?: any;
  uppercase?: boolean;
  truncate?: string;
  shadow?: boolean;
}
const TAG_MAPS: Record<Tag, string> = {
  [Tag.H1]: "h1",
  [Tag.H2]: "h2",
  [Tag.H3]: "h3",
  [Tag.H4]: "h4",
  [Tag.H5]: "h5",
  [Tag.H6]: "h6",
};

const SIZE_MAPS: Record<Size, any> = {
  [Size.SMALL]: "text-small",
  [Size.NORMAL]: "text-normal",
  [Size.MEDIUM]: "text-medium",
  [Size.LARGE]: "text-large",
  [Size.XLARGE]: "text-xlarge",
  [Size.XXLARGE]: "text-xxlarge",
  [Size.XXXLARGE]: "text-xxxlarge",
  [Size.EXTRA]: "text-extra",
};

const COLOR_MAPS: Record<Color, string> = {
  [Color.PRIMARY]: "text-primary",
  [Color.VARIATION]: "text-variation",
  [Color.DARK]: "text-black",
  [Color.GRAY]: "text-gray",
  [Color.WHITE]: "text-white",
};

const ALIGN_MAPS: Record<Align, string> = {
  [Align.LEFT]: "text-left",
  [Align.RIGHT]: "text-right",
  [Align.CENTER]: "text-center",
};

const WEIGHT_MAPS: Record<Weight, string> = {
  [Weight.LIGHT]: "font-light",
  [Weight.NORMAL]: "font-normal",
  [Weight.MEDIUM]: "font-medium",
  [Weight.SEMIBOLD]: "font-semibold",
  [Weight.BOLD]: "font-bold",
  [Weight.EXTRABOLD]: "font-black",
};

const SPACING_MAPS: Record<Spacing, string> = {
  [Spacing.WIDE]: "tracking-wide",
  [Spacing.WIDER]: "tracking-wider",
  [Spacing.WIDEST]: "tracking-widest",
};

export function Title(props: Props) {
  const {
    children,
    tag = Tag.H2,
    color = Color.DARK,
    weight,
    size,
    align,
    spacing,
    onClick,
    uppercase = false,
    truncate,
    shadow,
  } = props;
  // eslint-disable-next-line no-undef
  const TitleTag = TAG_MAPS[tag!] as keyof JSX.IntrinsicElements;

  if (children)
    return (
      <TitleTag
        className={classNames(
          "block whitespace-pre-line leading-tight md:w-auto",
          COLOR_MAPS[color!],
          SIZE_MAPS[size!],
          ALIGN_MAPS[align!],
          WEIGHT_MAPS[weight!],
          SPACING_MAPS[spacing!],
          onClick && "cursor-pointer",
          uppercase && "uppercase",
          truncate,
          shadow && "drop-shadow"
        )}
        onClick={onClick}
      >
        {children}
      </TitleTag>
    );
  return null;
}

Title.tag = Tag;
Title.color = Color;
Title.weight = Weight;
Title.size = Size;
Title.align = Align;
Title.spacing = Spacing;
