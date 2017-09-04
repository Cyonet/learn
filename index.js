const KEY = 'INIT';
const JSON = window.JSON || global.JSON;

export function toJSON(v){
  try{
    return JSON.parse(v);
  }
  catch(e){
    return null;
  }
}
export function toStringify(v){
  return JSON.stringify(v)
}
//wrapper localStorage sessionStorage
export function Storage(storage = localStorage){
  return {
    getItem(key){
      return storage.getItem(key);
    },
    setItem(key, v){
      storage.setItem(key, v)
      return this;
    },
    removeItem(key){
      storage.removeItem(key);
      return this;
    },
    clearAll(){
      storage.clear();
      return this;
    },
    getJsonItem(key){
      return toJSON(this.getItem(key));
    }
    setJsonItem(key, v){
      return this.setItem(key,  toStringify(v));
    }
  }
}
//separate object value by keys
export function surplusObj(obj, keys){
  const surplus = Object.assign({}, obj);
  if(typeof keys == 'string') keys = [keys];
  keys.forEach(key => {
    if (obj && key in obj) {
      if(obj.hasOwnProperty(key)){
        delete surplus[key];
      }
    }
  });
  return surplus;
}
//check target is empty value
export function isEmpty(target) {
  if(target === undefined || target === null || target === '')return true;
  if(Array.isArray(target)){
    return target.length === 0;
  }
  if(typeof target === 'object'){
    for(let k in target){
      return false;
    }
    return true;
  }
  return false;
}
// check fn is function, consult jquery
export function isFunction( fn ){
  return !!fn && typeof fn !== 'string' && !fn.nodeName &&
    fn.constructor !== Array && /^[\s[]?function/.test( fn + '' );
}
// check fn is number, consult jquery
export function isNumeric( obj ) {
  let type = typeof obj;
  return ( type === 'number' || type === 'string' ) &&
    !isNaN( obj - parseFloat( obj ) );
}
//covert oCamelcase
export function hyphenToCamelcase(str, h='-') {
  return str.replace(new RegExp('\\'+h+'\(\\w\)','g'), function (all, mactch) {
    return mactch.toUpperCase();
  });
}
//covert monery to show
export function covertMoney (num){
  if(isNumeric(num))){
    return (+num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }else{
    return 0;
  }
}
