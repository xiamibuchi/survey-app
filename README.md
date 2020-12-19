### 本地开发

1. 依赖
   yarn
   nodejs

2. 克隆下仓库后，进入根目录

```
# 安装依赖
yarn
```

3. 模块开发

```
# name 为对应模块名字，不传名字，默认是登录模块
yarn dev <name>
```

4. 打包说明

```
# 打包对应模块
yarn build <name>
```

### 一些说明

1. 依赖安装

```
# 给所有项目安装依赖
lerna add name

# 给特定项目添加依赖
lerna add name --scope=项目的package.json 的name
```

2. 在根目录安装一些依赖

```
# 在项目根目录安装开发依赖
yarn -W -D add name
```
