(() => {
    let res = $response;  // 直接获取整个响应对象
    let body = res.body;
    let userName = $argument;

    try {
        let obj = JSON.parse(body);  // 解析 JSON 数据

        // 确保 ServerInfo 存在，并修改 UserName
        if (obj && obj.ServerInfo && typeof obj.ServerInfo === "object") {
            obj.ServerInfo.UserName = userName;
        } else {
            console.log("ServerInfo 结构不匹配，无法修改 UserName");
        }

        res.body = JSON.stringify(obj);  // 重新序列化 JSON 并赋值给 res.body
    } catch (e) {
        console.log("JSON 解析出错: " + e);
    }

    $done(res);  // 直接返回修改后的整个响应对象
})();