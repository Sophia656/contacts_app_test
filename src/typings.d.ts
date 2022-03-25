/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}
  
declare module '*.scss' {
    const content: Record<string, string>
    export default content
}
  