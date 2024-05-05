/**
 * 断言函数，用于验证条件是否满足，如果条件不满足则抛出错误。
 * @param {boolean} condition 需要验证的条件
 * @param {string} errorMessage 指定错误消息
 * @param {boolean} [enabled=true] 是否启用断言
 * @throws {Error}
 * @returns {void}
 */
function assert(condition, errorMessage, enabled = true) {
  if (!enabled) {
    return;
  }
  if (!condition) {
    throw new Error(errorMessage || "Assertion failed");
  }
}

export default assert;
