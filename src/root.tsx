import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikPartytown } from './components/partytown/partytown';
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown />
        <link rel="manifest" href="/manifest.json" />
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
        <script

          dangerouslySetInnerHTML={`
            window.googletag = window.googletag || { cmd: [] };
            `}
        />
        <RouterHead />
      </head>
      <body lang="en" style="display: flex; justify-content: center; align-items: center; padding: 200px 100px; flex-direction: column;">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
