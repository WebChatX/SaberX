/**
 * 防抖函数，用于限制函数的执行频率。
 * @param {Function} func 要执行的函数
 * @param {number} delay 延迟时间（以毫秒为单位）
 * @returns {Function} 返回一个新的函数，该函数会在被调用后等待一段时间再执行传入的函数
 */
function debounce(func, delay)
{
  let timerId = null;
  return function(...args) {
    const context = this;
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(context, args);
      timerId = null;
    }, delay);
  }
}

export default debounce;
