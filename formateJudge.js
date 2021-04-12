/**
 * 判断输入是否为一个浮点型数据的字符串，用来精确浮点型数据
 * true返回：.2、0.02、45.6等
 * false返回：0.0.0、0、str等
 * @param {string} str 
 */
function isFloat(str){
    return /^[-+]?[0-9]*\.{1}[0-9]+$/.test(str)
}