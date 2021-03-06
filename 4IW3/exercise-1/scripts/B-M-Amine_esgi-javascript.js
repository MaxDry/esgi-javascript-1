function ucfirst(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function camelCase(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    let words = chaine.toLowerCase().split(' ');
    let result = "";
    for (var i = 0; i < words.length; i++) {
        result += ucfirst(words[i]);
    }
    return result;
}

function prop_access(obj, path) {
    if(path === "" || path == null){
        return obj;
    }
    if(obj == null){
        return path + "not exist";
    }
    let props = path.split('.');
    let result = obj;
    for (var i = 0; i < props.length; i++) {
        result = result[props[i]];
        if (typeof result === 'undefined'){
            return path + "not exist";
        }
    }
        return result;
}




module.exports.ucfirst = ucfirst;
module.exports.camelCase = camelCase;
module.exports.prop_access = prop_access;
