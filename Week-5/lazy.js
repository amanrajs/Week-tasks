import * as constant from './scripts/constants.js';

export default () => {
    return new Promise((resolve, reject) => {
        fetch(constant.lazy_url)
            .then(response => response.json())
            .then(data => {
                resolve(data['articles'])
            })
            .catch(error => {
                reject(error);
                console.log(error);
            })
    });
};

