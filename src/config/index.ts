/**
 * @desption 配置编译环境和线上环境之间的切换
 * @param baseURL 老项目域名地址
 * @param khglUrl: 客户管理域名地址
 * @param dicUrl : 字典服务器地址
 * @param routerMode: 路由模式
 * @param imgBaseUrl: 图片所在域名地址
 * @param welUrl :默认欢迎页
 * @param iconfontUrl 字体图标地址
 * @param iconfontVersion 字体图标版本
 */

let baseURL = "http://192.168.28.178:8765";
const iconfontVersion = ["567566_r22zi6t8noas8aor"];
const iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
const codeUrl = `${baseURL}/code`;
const env = process.env;

if (env.NODE_ENV === 'development') {
	baseURL = `http://192.168.6.170:8765`; // 开发环境地址
} else if (env.NODE_ENV === 'production') {
	baseURL = `http://192.168.6.170:8765`; // 生产环境地址
} else if (env.NODE_ENV === 'test') {
	baseURL = `http://192.168.6.170:8765`; // 测试环境地址
}

export { baseURL, iconfontUrl, iconfontVersion, codeUrl, env };
