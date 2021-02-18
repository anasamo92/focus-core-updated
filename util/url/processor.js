import {compile} from 'lodash';
/**
* Process an url in order to build them.
*/
export default function (url, data) {
    return compile(url)(data);
}
