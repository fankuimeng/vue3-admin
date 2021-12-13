/*
 *  判断svg是否为外部资源
 * @parma {*} path
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
