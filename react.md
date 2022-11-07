Reac不是一个完整的MVC框架

React采用声明范式

React中diff，通过将修改的数据用js对象描述，然后与原对象对比，将修改或者删除的标记，然后再去通过最小性能去更新

函数式组件在16.8之前是无状态组件，16.8引入了react hooks

在表单中，使用value设置固定值，输入框无法输入，受控组件

需要使用defalutValue设置默认值（非受控）

在react中onChange和onInput是一样的效果，原生中，onChange是修改值且失去焦点才调用