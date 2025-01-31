
(() => {
  let body = $response.body;

  try {
    let obj = JSON.parse(body);
    // 2. 修改字段
    if (obj.ServerInfo && obj.ServerInfo.UserName) {
      obj.ServerInfo.UserName = "sid77844000";
    }
    body = JSON.stringify(obj);
  } catch (e) {
    console.log("脚本解析出错: " + e);
  }

  $done({ body });
})();
