/**
 * 验证手机号码格式是否符合规范。
 * @param {string} phone 手机号码
 * @returns {boolean}
 */
function isValidPhone(phone) {
  if (typeof phone !== "string" || phone.trim() === "") {
    return false;
  }
  return /^1[3456789]\d{9}$/.test(phone);
}

export default isValidPhone;
