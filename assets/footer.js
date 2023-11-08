import { html } from "NL1";
import settings from "./settings.json";

export const renderFooter = html.node`<footer class="footer">
  <div class="tagline">
    <b>Glitch in Bio</b><br />
    Your links, your way.
  </div>
  <a
    class="btn--remix"
    target="_top"
    href="https://glitch.com/edit/#!/remix/glitch-in-bio"
  >
    <img
      src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
      alt=""
    />
    Get your own free page
  </a>
</footer>
`;
