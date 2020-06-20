declare module "unified" {
  type x<y = any> = any;
  export {
    x as Parser,
    x as Plugin
  }
}
