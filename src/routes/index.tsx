import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
			<div class='ad-container'>
				<h1 style='width: 300px; text-align: center'>Google Example</h1>

				<div id='banner-ad-google' style='width: 300px; height: 250px'></div>

				<script
					type='text/partytown'
					dangerouslySetInnerHTML={`            
						googletag.cmd.push(() => {
							googletag
								.defineSlot("/6355419/Travel/Europe/France/Paris", [300, 250], "banner-ad-google")
								.addService(googletag.pubads());
					
							googletag.enableServices();
							googletag.display("banner-ad-google");
						});
					`}
				/>
			</div>
      <div class="ad-container">
        <h1>nau_mag_front_top</h1>

        <div
          id="banner-ad-1"
          style="width: 970px; height: 250px; border: 1px solid black;"
        ></div>

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
            
          googletag.cmd.push(() => {

            const slot = googletag.defineSlot("/21728735909/nau_mag/nau_mag_front/nau_mag_front_top", [[970,90],[970,250],[728,90],[994,118],[994,250]], "banner-ad-1");
            slot.addService(googletag.pubads());

            const targeting2 = {"section":["front"],"magazine":["test"],"showcase":["staging-mag"]};
            Object.keys(targeting2).forEach(key => {
                if(targeting2[key].length > 0){
                    slot.setTargeting(key, targeting2[key]);
                }
            });

            googletag.enableServices();
            googletag.display("banner-ad-1");
        });
    
          `}
        />
      </div>

      <div class="ad-container">
        <h1>nau_mag_front_mid_1</h1>

        <div
          id="banner-ad-2"
          style="width: 970px; height: 250px; border: 1px solid black;"
        ></div>

        <script
          type="text/partytown"
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

      <div class="ad-container">
        <h1>nau_mag_front_mid_2</h1>

        <div
          id="banner-ad-3"
          style="width: 970px; height: 250px; border: 1px solid black;"
        ></div>

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
          googletag.cmd.push(() => {

              const slot = googletag.defineSlot("/21728735909/nau_mag/nau_mag_front/nau_mag_front_mid_2", [[970,90],[970,250],[728,90],[994,118],[994,250]], "banner-ad-3");
              slot.addService(googletag.pubads());

              const targeting2 = {"section":["front"],"magazine":["health"],"showcase":["staging-mag"]};
              Object.keys(targeting2).forEach(key => {
                  if(targeting2[key].length > 0){
                      slot.setTargeting(key, targeting2[key]);
                  }
              });

              googletag.enableServices();
              googletag.display("banner-ad-3");
          });
      `}
        />
      </div>

      <div class="ad-container">
        <h1>nau_mag_front_mid_3</h1>

        <div
          id="banner-ad-4"
          style="width: 970px; height: 250px; border: 1px solid black;"
        ></div>

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
            googletag.cmd.push(() => {

                const slot = googletag.defineSlot("/21728735909/nau_mag/nau_mag_front/nau_mag_front_mid_3", [[970,90],[970,250],[728,90],[994,118],[994,250]], "banner-ad-4");
                slot.addService(googletag.pubads());

                const targeting2 = {"section":["front"],"magazine":["health"],"showcase":["staging-mag"]};
                Object.keys(targeting2).forEach(key => {
                    if(targeting2[key].length > 0){
                        slot.setTargeting(key, targeting2[key]);
                    }
                });

                googletag.enableServices();
                googletag.display("banner-ad-4");
            });
          `}
        />
      </div>

      <div class="ad-container">
        <h1>nau_mag_front_left</h1>
        <div
          style="width: 300px; height: 600px; border: 1px solid black;"
          id="half-page-ad-left"
        ></div>

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
            googletag.cmd.push(() => {

              const slot = googletag.defineSlot("/21728735909/nau_mag/nau_mag_front/nau_mag_front_left", [[300,250],[120,600],[160,600],[300,600]], "half-page-ad-left");
              slot.addService(googletag.pubads());

              const targeting2 = {"section":["front"],"magazine":["test"],"showcase":["staging-mag"]};
              Object.keys(targeting2).forEach(key => {
                  if(targeting2[key].length > 0){
                      slot.setTargeting(key, targeting2[key]);
                  }
              });

              googletag.enableServices();
              googletag.display("half-page-ad-left");
          });
      `}
        />
      </div>

      <div class="ad-container">
        <h1>nau_mag_front_right</h1>
        <div
          style="width: 300px; height: 600px; border: 1px solid black;"
          id="half-page-ad-right"
        ></div>

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
          googletag.cmd.push(() => {

              const slot = googletag.defineSlot("/21728735909/nau_mag/nau_mag_front/nau_mag_front_right", [[300,250],[120,600],[160,600],[300,600]], "half-page-ad-right");
              slot.addService(googletag.pubads());

              const targeting2 = {"section":["front"],"magazine":["test"],"showcase":["staging-mag"]};
              Object.keys(targeting2).forEach(key => {
                  if(targeting2[key].length > 0){
                      slot.setTargeting(key, targeting2[key]);
                  }
              });

              googletag.enableServices();
              googletag.display("half-page-ad-right");
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
