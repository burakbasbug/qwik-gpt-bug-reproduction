import { component$, createContextId, useContextProvider, useStore } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikPartytown } from './components/partytown/partytown';
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

type ScriptType = {type: "text/partytown" | "text/javascript" };
export const ScriptTypeContext = createContextId<ScriptType>('script-type-context');

export default component$(() => {
  const scriptType = useStore<ScriptType>({
    // type: "text/partytown",
    type: "text/javascript",
  });
  useContextProvider(ScriptTypeContext, scriptType);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown />
        <link rel="manifest" href="/manifest.json" />
        <script 
          {...scriptType}
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
        <script
          {...scriptType}
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
