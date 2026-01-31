"use client";

export default function ShareButton({
  title = "TouTube",
  text = "Better than YouTube ;)",
  url = "https://tou-tube.vercel.app",
}: {
  title: string;
  text: string;
  url: string;
}) {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, text, url });
    } else {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, "_blank");
    }
  };


  return (
    <button onClick={handleShare} className="blog-share">
      Share
    </button>
  );
}
