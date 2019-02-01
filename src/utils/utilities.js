import Cookie from 'js-cookie';
import {detect} from 'detect-browser'


export const isSignedInByCookies = () => {
    let flag = false;

    if(Cookie.get("hash")){
        flag = true;
    }
    else {
        flag = false;
    }
    return flag;
}

///////////////////////////////////////////IDENTIFIYING DEVICE///////////////////////////////////////

export const getDeviceIdentity = () => {
    const device = detect();
  
    return {
        osname: device.os,
        browsername: device.name + " " + device.version
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////CREATING DEVICE HASH////////////////////////////////////////////////////////////////
export const deviceHash = () => {
    if(!Cookie.get("deviceHash")){
        var deviceHash = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 20; i++){
            deviceHash += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        Cookie.set("deviceHash", deviceHash, {expires: new Date(2038, 12, 31)});
        return deviceHash;
    }
    else return Cookie.get("deviceHash");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initialState = {
    messages: {
        errors: {},
        success: {}
    }
}
