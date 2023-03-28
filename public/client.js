// client.js
// 获取页面中的按钮元素
const send = document.getElementById('send');
// 给按钮添加点击事件监听器
send.addEventListener('click', () => {
    // 创建一个XMLHttpRequest对象，用于发送ajax请求
    const xhr = new XMLHttpRequest();
    // 设置请求方法为post，请求地址为/post
    xhr.open('POST', '/post');
    // 设置请求头，指定内容类型为json
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 设置响应类型为json
    xhr.responseType = 'json';
    // 设置请求成功的回调函数
    xhr.onload = () => {
        // 获取响应数据
        const data = xhr.response;
        // 打印数据到控制台
        console.log(data);
        // 弹出一个对话框，显示服务器返回的消息
        alert(data.message);
    };
    // 设置请求失败的回调函数
    xhr.onerror = () => {
        // 弹出一个对话框，显示错误信息
        alert('请求失败，请检查网络或服务器状态');
    };
    // 发送请求，携带一个json格式的数据对象
    xhr.send(JSON.stringify({name: '张三', age: 18}));
});