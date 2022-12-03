Reac不是一个完整的MVC框架

React采用声明范式

React中diff，通过将修改的数据用js对象描述，然后与原对象对比，将修改或者删除的标记，然后再去通过最小性能去更新

函数式组件在16.8之前是无状态组件，16.8引入了react hooks
16.2之前是有componentWillMount，之后不推荐使用,修改了diff算法，使用fiber技术
之前diff算法：旧的虚拟dom对比新的dom是同步的，如果组件的对象特别大时，会出现假死现象，造成卡顿。

在表单中，使用value设置固定值，输入框无法输入，受控组件

需要使用defalutValue设置默认值（非受控）

在react中onChange和onInput是一样的效果，原生中，onChange是修改值且失去焦点才调用

设置key原因：为了列表的复用和重拍，设置key值，提高性能

不涉及列表的删除和增加，使用index是可以的

不能直接修改state的值，可以使用slice

dangerouslySetInnerHTML将富文本显示在网页
