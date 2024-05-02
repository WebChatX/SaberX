<!--
 * @Author: liliang 1220795758@qq.com
 * @Date: 2024-04-29 11:31:19
 * @LastEditors: liliang 1220795758@qq.com
 * @LastEditTime: 2024-05-02 08:46:32
 * @FilePath: \saber-x\CHANGELOG.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 2024-04-29

新增函数：
- `$`：接收选择器字符串，返回与选择器匹配的第一个DOM元素。
- `$$`：接收选择器字符串，返回与选择器匹配的全部DOM元素。

### 2024-04-30

新增函数：
- `debounce`：防抖函数，用于限制函数的执行频率。

### 2024-05-01

修改函数：
- `debounce`：修复this指向问题。

### 2024-05-02

新增函数：
- `throttle`：创建一个节流函数，确保在一定时间间隔内只调用一次指定的函数。
