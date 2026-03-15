import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const ResponsiveImageGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://backend.bromo.bromochemredeemed.com/videos");
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  // Extract YouTube ID robustly from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  // Fallback UI if video can't be embedded
  const VideoFallback = ({ video }) => (
    <div
      className="absolute inset-0 flex items-center justify-center bg-gray-800"
      role="region"
      aria-label={`Video fallback for ${video.st_title}`}
    >
      <div className="text-center p-4">
        <p className="text-white text-lg">{video.st_title}</p>
        <a
          href={video.st_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-2 inline-block"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );

  if (loading)
    return (
      <div className="text-center py-8" role="status" aria-live="polite">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-8 text-red-500" role="alert">
        Error: {error}
      </div>
    );

  if (videos.length === 0)
    return (
      <div className="text-center py-8" role="status" aria-live="polite">
        No videos found
      </div>
    );

  return (
    <>
      <Helmet>
        <title>Videos | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta
          name="description"
          content="Explore our collection of high-quality videos at Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main
        className="bg-gray-50 dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12"
        aria-label="Video gallery"
      >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="mb-8 text-center">
            <h2
              className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 font-bold tracking-tight sm:text-5xl"
              tabIndex={0}
            >
              Videos
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-700 dark:text-gray-300">
              Here Are Some of the Videos we provide
            </p>
          </header>

          <section
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"
            role="list"
            aria-label="Video list"
          >
            {videos.map((video, index) => {
              const youtubeId = getYouTubeId(video.st_url);
              const colSpan = index % 4 === 1 || index % 4 === 2 ? "md:col-span-2" : "";

              return (
                <article
                  key={video.id}
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${colSpan}`}
                  role="listitem"
                  tabIndex={0}
                  aria-label={video.st_title}
                >
                  {youtubeId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.st_title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  ) : (
                    <VideoFallback video={video} />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {video.st_cn}
                  </span>
                </article>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default ResponsiveImageGallery;
