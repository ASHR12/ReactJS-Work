// SingleColor.jsx
import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
function SingleColor({ rgb, weight, index }) {
  const [copied, setCopied] = useState(false);
  const bgc = rgb.join(",");
  const hex = `#${rgbToHex(...rgb)}`;

  // Convert rgb to hex, function defined elsewhere
  const hexValue = `#${rgbToHex(...rgb)}`;

  const copyToClipboard = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex);
      toast.success(`Copied ${hex} to clipboard`);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => copyToClipboard(hex)}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
}

// Helper function to convert RGB to HEX
function rgbToHex(r, g, b) {
  return [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
}

export default SingleColor;
