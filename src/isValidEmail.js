/**
 * 验证邮箱地址格式是否符合规范。
 * @param {string} email 邮箱地址
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string" || email.trim() === "") {
    return false;
  }
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export default isValidEmail;
