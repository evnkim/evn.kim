/**
 * An image figure with optional caption
 */
export const Figure: React.FC<{
  src: string;
  alt: string;
  caption?: React.ReactNode;
  className?: string;
}> = ({ src, alt, caption, className = "" }) => (
  <figure className={`my-8 text-center ${className}`}>
    <img
      src={src}
      alt={alt}
      className="max-w-full mx-auto"
    />
    {caption && (
      <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

/**
 * A video figure with optional caption
 */
export const Video: React.FC<{
  src: string;
  caption?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}> = ({
  src,
  caption,
  autoPlay = false,
  loop = false,
  muted = false,
  className = "",
}) => (
  <figure className={`my-8 text-center ${className}`}>
    <video
      src={src}
      controls
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      className="max-w-full shadow-lg rounded-md mx-auto"
    />
    {caption && (
      <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

/**
 * A YouTube embed
 */
export const YouTubeEmbed: React.FC<{
  videoId: string;
  title?: string;
  className?: string;
}> = ({ videoId, title = "YouTube video", className = "" }) => (
  <div className={`my-8 aspect-video ${className}`}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg shadow-lg"
    />
  </div>
);

