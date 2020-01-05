const nodeGeocoder =require('node-geocoder');

const options = {
    provider: process.env.GOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GOCODER_API_KEY,
    formatter: null
}

const geocoder = nodeGeocoder(options);

module.exports = geocoder; 