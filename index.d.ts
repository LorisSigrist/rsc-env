/**
 * Discriminates between react-server and other environments
 */
declare module "rsc-env" {
    /**
     * If the entry-point importing this is a Server Component.
     */
    export const rsc: boolean
}