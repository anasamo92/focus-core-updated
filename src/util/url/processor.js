import {template} from 'lodash';
/**
* Process an url in order to build them.
*/
export default function (url, data) {
    return template(url)(data);
}
