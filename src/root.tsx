import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from './components/partytown/partytown';

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
        <script type="text/partytown" async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
        <script type="text/partytown" dangerouslySetInnerHTML={`
          window.googletag = window.googletag || { cmd: [] };

          googletag.cmd.push(() => {
            // Define an ad slot for div with id "banner-ad".
            googletag
              .defineSlot("/6355419/Travel/Europe/France/Paris", [300, 250], "banner-ad")
              .addService(googletag.pubads());

            // Enable the PubAdsService.
            googletag.enableServices();
          });
        `} />
          
        <RouterHead />
      </head>
      <body lang="en" style="display: flex; justify-content: center; align-items: center; height: 800px; flex-direction: column;">
        <h1>#banner-ad :</h1>
        <div id="banner-ad" style="width: 300px; height: 250px; border: 1px solid black;"></div>
        <script type="text/partytown" dangerouslySetInnerHTML={`
          googletag.cmd.push(() => {
            // Request and render an ad for the "banner-ad" slot.
            googletag.display("banner-ad");
          });
        `} />
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
