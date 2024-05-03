/**
 * 将文本复制到剪贴板。
 * @param {string} text 要复制到剪贴板的文本
 * @returns {Promise<boolean>} 如果复制成功，则返回 true,否则返回 false
 */
function copyToClipboard(text) {
  return new Promise((resolve) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => resolve(true),
        () => resolve(false)
      );
    } else {
      const textAreaEl = document.createElement("textarea");
      textAreaEl.value = text;
      textAreaEl.style.position = "fixed";
      textAreaEl.style.opacity = 0;
      document.body.appendChild(textAreaEl);
      textAreaEl.select();
      try {
        document.execCommand("copy") ? resolve(true) : resolve(false);
      } catch (error) {
        resolve(false);
      }
      document.body.removeChild(textAreaEl);
    }
  });
}

export default copyToClipboard;
