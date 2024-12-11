import React from "react";

export default function ProductHuntBadge() {
  return (
    <a
      className="fixed bottom-0 right-0 mr-3 mb-1 z-10"
      href="https://www.producthunt.com/posts/ownlink?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ownlink"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=424686&theme=light"
        alt="OwnLink - Single&#0032;link&#0032;for&#0032;all&#0032;your&#0032;social&#0032;media&#0032;links&#0032;with&#0032;Ownlink | Product Hunt"
        style={{ width: "150px", height: "54px" }}
        width="150"
        height="54"
      />
    </a>
  );
}
