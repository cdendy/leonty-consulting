// components/WatchVideo.tsx
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

interface WatchVideoProps {
  /**
   * Any valid YouTube URL (watch URL, shortened youtu.be URL, or embed URL).
   * Example: "https://www.youtube.com/watch?v=NFsFgerTO6E"
   */
  videoUrl: string;
  /**
   * CSS width value for the video container (e.g. "100%", "640px", "80vw").
   * Defaults to "100%".
   */
  width?: string;
  /**
   * CSS height value for the video container (e.g. "360px", "auto").
   * If you want a strict 16:9 ratio instead of a fixed height, omit this prop
   * and set `useAspectRatio={true}` (the default behavior).
   */
  height?: string;
  /**
   * When true (default), the component forces a 16:9 aspect ratio by wrapping
   * the iframe in a "padding-top: 56.25%" container. If you supply a non-empty
   * `height` prop, this flag is ignored and the container simply uses that height.
   */
  useAspectRatio?: boolean;
}

const getEmbedUrl = (urlString: string, autoplay: boolean): string => {
  try {
    const url = new URL(urlString);
    let videoId = "";

    // If it’s a "youtu.be/..." link:
    if (url.hostname.includes("youtu.be")) {
      videoId = url.pathname.slice(1); // everything after '/'
    }
    // If it’s a "youtube.com/watch?v=..." link:
    else if (url.searchParams.has("v")) {
      videoId = url.searchParams.get("v") || "";
    }
    // If it’s already an embed URL ("/embed/VIDEO_ID"):
    else if (url.pathname.includes("/embed/")) {
      videoId = url.pathname.split("/embed/")[1];
    }

    if (!videoId) {
      // Fallback: just return the original string
      return urlString;
    }

    const embedBase = `https://www.youtube.com/embed/${videoId}`;
    return autoplay ? `${embedBase}?autoplay=1` : embedBase;
  } catch {
    // If parsing fails, return the original URL
    return urlString;
  }
};

function getYoutubeThumbnail(urlString: string): string {
  try {
    const url = new URL(urlString);
    let videoId = "";
    if (url.hostname.includes("youtu.be")) {
      videoId = url.pathname.slice(1);
    } else if (url.searchParams.has("v")) {
      videoId = url.searchParams.get("v") || "";
    } else if (url.pathname.includes("/embed/")) {
      videoId = url.pathname.split("/embed/")[1];
    }
    if (!videoId) return "";
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return "";
  }
}

export default function WatchVideo({
  videoUrl,
  width = "100%",
  height,
  useAspectRatio = true,
}: WatchVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Only build the real embed URL when the user clicks Play
  const embedSrc = isPlaying ? getEmbedUrl(videoUrl, true) : "";

  /**
   * If `useAspectRatio` is true AND no explicit `height` prop was passed,
   * we wrap the iframe+overlay inside a 16:9 container:
   *
   *   <div style={{ width, position: 'relative', paddingTop: '56.25%' }}>
   *     <!-- inner absolute wrapper -->
   *   </div>
   *
   * Otherwise, we just size the container by width+height directly.
   */
  if (useAspectRatio && !height) {
    return (
      <div
        className="overflow-hidden rounded-lg shadow-lg bg-black"
        style={{
          width,
          position: "relative",
          paddingTop: "56.25%", // 9 ÷ 16 = 0.5625 → 56.25%
        }}
      >
        <iframe
          src={embedSrc}
          title="Embedded YouTube video"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Overlay only shows when isPlaying === false */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src={getYoutubeThumbnail(videoUrl)}
              alt="Video poster frame"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              style={{ zIndex: 0 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center" style={{ zIndex: 1 }}>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Watch Video
              </h2>
              <button
                aria-label="Play video"
                className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 focus:outline-none"
                onClick={() => setIsPlaying(true)}
              >
                <FaPlay className="text-lg text-black" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Fallback: explicit width & height (no 16:9 ratio trick)
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg bg-black"
      style={{ width, height: height ?? "auto" }}
    >
      <iframe
        src={embedSrc}
        title="Embedded YouTube video"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Overlay only shows when isPlaying === false */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Watch Video
          </h2>
          <button
            aria-label="Play video"
            className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsPlaying(true)}
          >
            <FaPlay className="text-lg text-black" />
          </button>
        </div>
      )}
    </div>
  );
}
