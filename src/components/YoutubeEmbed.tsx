interface YoutubeProps {
  className: string;
  urlEmbed: string;
}
export default function YouTubeEmbed({ className, urlEmbed }: YoutubeProps) {
  return (
    <>
      <iframe
        src={urlEmbed}
        title="YouTube video player"
        className={className}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </>
  );
}
