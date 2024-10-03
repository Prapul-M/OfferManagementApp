const axios = require('axios');

// Use process.env to access environment variables
const CLIENT_ID = process.env.SALESFORCE_CLIENT_ID;
const CLIENT_SECRET = process.env.SALESFORCE_CLIENT_SECRET;
const SUBDOMAIN = process.env.SALESFORCE_SUBDOMAIN;

async function getAccessToken() {
  const tokenUrl = `https://${SUBDOMAIN}.auth.marketingcloudapis.com/v2/token`;
  try {
    const response = await axios.post(tokenUrl, {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw new Error('Failed to obtain access token');
  }
}

async function updateDataExtension(offerData) {
  try {
    console.log('Getting access token...');
    const accessToken = await getAccessToken();
    console.log('Access token obtained');

    const endpoint = `https://${SUBDOMAIN}.rest.marketingcloudapis.com/data/v1/async/dataextensions/key:4DE0F2A1-A67A-441F-BB12-2EDBA7D9C75F/rows`;
    console.log('Sending request to:', endpoint);

    const response = await axios.post(endpoint, {
      items: [offerData]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    console.log('Data Extension updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating Data Extension:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { updateDataExtension };