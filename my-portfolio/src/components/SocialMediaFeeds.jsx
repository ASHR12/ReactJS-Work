import { useEffect } from "react";
import Loader from "./Loader";
import useFetchCMSData from "../fetchCMSData";

const YouTubeIframe = ({ YT_ID }) => {
  console.log("youtubevideoIdXXXX", YT_ID);
  return (
    <iframe
      className="w-full h-96 md:h-500"
      src={`https://www.youtube.com/embed/${YT_ID}`} // Replace [videoID] with your actual video ID
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

const TwitterIframe = ({ TW_ID }) => {
  console.log("tweetIdXXX", TW_ID);
  useEffect(() => {
    const addTwitterScript = () => {
      if (!window.twttr) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          // Check that window.twttr.widgets is available before calling load
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
          }
        };
        document.body.appendChild(script);
      } else if (window.twttr.widgets) {
        // Load widgets if twttr is already available and has widgets
        window.twttr.widgets.load();
      }
    };

    addTwitterScript();
  }, []);

  return (
    <div className="twitter-embed-container flex justify-center">
      <div className="w-full max-w-xl mx-auto">
        <blockquote className="twitter-tweet" data-theme="light">
          <a href={`https://twitter.com/ai_for_success/status/${TW_ID}`}>
            <div className="flex justify-center">
              <Loader />
            </div>
          </a>
        </blockquote>
      </div>
    </div>
  );
};

const SocialMediaFeeds = () => {
  const { loading, cmsdata } = useFetchCMSData();
  if (loading) {
    return <div>Loading...</div>; // Display a loading message while the data is being fetched
  }
  const item = cmsdata && cmsdata[0]; // This will safely check if cmsdata is defined and has at least one item.
  if (!item) {
    return <div>No data found</div>; // Display a message if no data is found
  }
  return (
    <div className="bg-purple-100 py-16">
      <div className="align-element flex flex-col gap-8">
        {item && (
          <>
            <div>
              <YouTubeIframe YT_ID={item.youtubevideoId} />
            </div>
            <div>
              <TwitterIframe TW_ID={item.tweetId} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SocialMediaFeeds;
