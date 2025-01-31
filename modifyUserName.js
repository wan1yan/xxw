const CUSTOM_USERNAME = "wxid1707944349503"; // 想改成什么就自己填

(() => {
  let body = $response.body;

  try {
    let obj = JSON.parse(body);
    // 2. 修改字段
    if (obj.ServerInfo && obj.ServerInfo.UserName) {
      obj.ServerInfo.UserName = CUSTOM_USERNAME;
    }
    body = JSON.stringify(obj);
  } catch (e) {
    console.log("脚本解析出错: " + e);
  }

  $done({ body });
})();
