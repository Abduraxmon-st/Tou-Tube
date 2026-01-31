"use client";

export default function ShareButton({
  title = "a",
  text = "a",
  url = "https://tou-tube.vercel.app",
}: {
  title: string;
  text: string;
  url: string;
}) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link nusxalandi 📋");
      }
    } catch (e) {
      console.error("Share failed:", e);
    }
  };

  return (
    <button onClick={handleShare} className="blog-share">
      Share
    </button>
  );
}
