import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
            <script 
        // type="text/partytown"
         async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />  
        <script
            // type="text/partytown"
            dangerouslySetInnerHTML={`
            window.googletag = window.googletag || { cmd: [] };
            `}
        />


      <div class="ad-container">
        <h1>nau_mag_front_mid_1 (Safe Frame Enabled)</h1>

        <div
          id="banner-ad-2"
          style="width: 970px; height: 250px; border: 1px solid black;"
        ></div>

        <script
        //   type="text/partytown"
          dangerouslySetInnerHTML={`

          googletag.cmd.push(() => {

            const slot = googletag.defineSlot("/21728735909/nau_mag/nau_mag_front/nau_mag_front_mid_1", [[970,90],[970,250],[728,90],[994,118],[994,250]], "banner-ad-2");
            slot.addService(googletag.pubads());

            const targeting2 = {"section":["front"],"magazine":["test"],"showcase":["staging-mag"]};
            Object.keys(targeting2).forEach(key => {
                if(targeting2[key].length > 0){
                    slot.setTargeting(key, targeting2[key]);
                }
            });

            googletag.enableServices();
            googletag.display("banner-ad-2");
        });
    
          `}
        />
      </div> 

    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
