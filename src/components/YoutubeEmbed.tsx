interface YoutubeProps {
  className: string;
}
export default function YouTubeEmbed({ className }: YoutubeProps) {
  return (
    <iframe
      src="https://www.youtube.com/embed/QxYSWjAVd8Y?si=Wz4Ge8Xipt-sUagW"
      title="YouTube video player"
      className={className}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
