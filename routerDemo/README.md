# router-demo

> vuerouter

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 总结 
状态管理就好比一个仓库。仓库里面有各式各样的东西，你可以到仓库里拿东西，也可以把东西存在仓库里面。
state: 用来存储数据
mutations: 用来修改state中的数据
actions： 执行mutations或进行一些异步操作
mapGetters: 指向state （找到它就相当于找到state，便可取数据）
mapAction: 指向 actions 执行actions中的函数
