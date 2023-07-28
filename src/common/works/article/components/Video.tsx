"use client";

const getUrlYT = (url: any) => {
  return `https://www.youtube.com/embed/${
    url.split("/")[3].split("&")[0].split("=")[1]
  }`;
};

export default function Video({ data }: any) {
  return (
    <div className="max-w-3xl mx-auto">
      <iframe
        id="ytplayer"
        src={getUrlYT(data.url)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-video rounded-xl"
      ></iframe>
    </div>
  );
}
