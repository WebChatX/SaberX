/**
 * 解析url，获取query对象
 * @param {string} url
 *
 */
function parseQuery(url) {
  const queryObj = {};
  url
    .split("?")[1]
    .split("&")
    .forEach((item) => {
      const [first, second] = item.split("=");
      queryObj[first] = decodeURIComponent(second);
    });
  return queryObj;
}

export default parseQuery;
