/**
 * 创建一个节流函数，确保在一定时间间隔内只调用一次指定的函数。
 * @param {Function} func 需要节流的函数
 * @param {number} delay 节流的时间间隔（以毫秒为单位）
 * @returns {Function} 返回节流后的函数
 */
function throttle(func, delay) {
  let lastCallTime = 0;
  return function(...args) {
    const currentTime = Date.now();
    if (currentTime - lastCallTime >= delay) {
      lastCallTime = currentTime;
      func.apply(this, args);
    }
  }
}

export default throttle;
