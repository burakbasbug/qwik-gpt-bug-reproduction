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
        forward: ['googletag.cmd.push'],
        resolveUrl: (url: URL, location: URL, type: string) => {
            if ((type === 'script' || type === 'xhr')) {
                const proxyUrl = new URL('/proxy', location.origin);
                proxyUrl.searchParams.append('url', encodeURI(url.href));
                return proxyUrl;
            }
            return url;
        },
        ...props,
    } as PartytownProps;
    return <script dangerouslySetInnerHTML={partytownSnippet(config)} />;
};
