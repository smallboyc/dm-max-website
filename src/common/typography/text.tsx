import classNames from "classnames";

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
  JUSTIFY,
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
}

interface Props {
  color?: Color;
  children?: any;
  align?: Align;
  size?: Size;
  weight?: Weight;
  uppercase?: boolean;
  className?: string;
  html?: boolean;
  italic?: boolean;
}

const SIZE_MAPS: Record<Size, any> = {
  [Size.SMALL]: "text-small",
  [Size.NORMAL]: "text-normal",
  [Size.MEDIUM]: "text-medium",
  [Size.LARGE]: "text-large",
  [Size.XLARGE]: "text-xlarge",
  [Size.XXLARGE]: "text-xxlarge",
  [Size.XXXLARGE]: "text-megalarge",
  [Size.EXTRA]: "text-gigalarge",
};

const COLOR_MAPS: Record<Color, string> = {
  [Color.PRIMARY]: "text-primary",
  [Color.VARIATION]: "text-variation",
  [Color.DARK]: "text-dark",
  [Color.GRAY]: "text-gray",
  [Color.WHITE]: "text-white",
};

const ALIGN_MAPS: Record<Align, string> = {
  [Align.LEFT]: "text-left",
  [Align.RIGHT]: "text-right",
  [Align.CENTER]: "text-center",
  [Align.JUSTIFY]: "text-justify",
};

const WEIGHT_MAPS: Record<Weight, string> = {
  [Weight.LIGHT]: "font-light",
  [Weight.NORMAL]: "font-normal",
  [Weight.MEDIUM]: "font-medium",
  [Weight.SEMIBOLD]: "font-semibold",
  [Weight.BOLD]: "font-bold",
};

export function Text(props: Props) {
  const { children, color, size, align, uppercase, html, weight, italic } =
    props;

  if (html)
    return (
      <div
        className={classNames(
          COLOR_MAPS[color!],
          SIZE_MAPS[size!],
          WEIGHT_MAPS[weight!],
          ALIGN_MAPS[align!],
          uppercase && "uppercase",

          "whitespace-pre-line",
          italic && "italic"
        )}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  return (
    <p
      className={classNames(
        COLOR_MAPS[color!],
        SIZE_MAPS[size!],
        WEIGHT_MAPS[weight!],
        ALIGN_MAPS[align!],
        uppercase && "uppercase",
        "whitespace-pre-line",
        italic && "italic"
      )}
    >
      {children}
    </p>
  );
}

Text.color = Color;
Text.weight = Weight;
Text.size = Size;
Text.align = Align;
