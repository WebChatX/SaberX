/**
 * 此函数返回字符串的一部分。
 * @param {string} text 原始字符串
 * @param {string} sep 分割符
 * @param {number} index 索引
 * @returns {string} 原始字符串的一部分
 */
function section(text, sep, index) {
  if (typeof text !== "string") {
    throw new Error("text is not a string type.");
  }
  const textArr = text.split(sep);
  if (index >= 0) {
    return textArr[index];
  } else {
    return textArr[textArr.length + index];
  }
}

export default section;
