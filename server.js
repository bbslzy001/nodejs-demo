// server.js
// 引入express模块
const express = require('express');
// 创建一个express应用
const server = express();
// 引入body-parser模块，用于解析post请求的数据
const bodyParser = require('body-parser');
// 使用body-parser中间件，将请求体转换为json格式
server.use(bodyParser.json());
// 设置静态文件目录，用于托管client.html和client.js文件
const path = require('path');
server.use(express.static(path.join(__dirname,'public')));
// 定义一个post路由，用于处理客户端发送的post请求
const port = 3000;
server.post('/post', (req, res) => {
    // 获取请求体中的数据
    const data = req.body;
    // 打印数据到控制台
    console.log(data);
    // 向客户端发送一个响应，包含一个message属性
    res.json({message: '收到了你的post请求'});
});


module.exports = {
    start: () => {
        // 监听3000端口，启动服务器
        server.listen(port, async () => {
            console.log(`服务器运行在 http://localhost:${port}`);
            const open = await import('open');
            await open.default(`http://localhost:${port}/client.html`);
        });
    },
    stop: () => {
        server.close();
    }
};