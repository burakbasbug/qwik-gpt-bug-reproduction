import type { PartytownConfig } from '@builder.io/partytown/integration';
import { partytownSnippet } from '@builder.io/partytown/integration';

/**
 * Props for `<QwikPartytown/>`, which extends the Partytown Config.
 *
 * https://github.com/BuilderIO/partytown#config
 *
 * @public
 */
export type PartytownProps = PartytownConfig;

/**
 * @public
 * You can pass setting with props
 */
export const QwikPartytown = (props: PartytownProps): any => {
    const config = {
        logCalls: true,
        logGetters: true,
        logSetters: true,
        logStackTraces: true,
        logScriptExecution: true,
        logMainAccess: true,
        debug: true,
        forward: ['dataLayer.push'],
        resolveUrl: (url: URL, location: URL) => {
            if (url.host !== location.host) {
                // const proxyUrl = new URL('https://cdn.builder.io/api/v1/proxy-api');
                const proxyUrl = new URL('/proxy', location.origin);
                proxyUrl.searchParams.append('url', url.href);
                return proxyUrl;
            }
        },
        ...props,
    } as PartytownProps;
    return <script dangerouslySetInnerHTML={partytownSnippet(config)} />;
};
