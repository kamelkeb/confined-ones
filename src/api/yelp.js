import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer VFbPtAkK6EcVdOUB5mQmLC9-iTBK_-l2hAjJLNfMboSZXYlBECrJl_2zKwy7w3QQBjYLepJPgCLSX6iAQRN9QDRXAo7hmnylefOSdyReC9kS0e56Zr8REmXwcvIQXnYx'
    }
});
