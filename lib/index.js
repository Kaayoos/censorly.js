const axios = require('axios');

class Censorly {
  constructor(apiToken) {
    if (!apiToken) {
      throw new Error('A valid API token is required. Sign up at https://censorly.dev/ to get your token.');
    }
    this.apiToken = apiToken;
    this.baseUrl = 'https://jwwodttgkwgvpnpxvgca.supabase.co/functions/v1';
  }

  async analyzeMessage(text) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/analyze-message`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error analyzing message: ${error.message}`);
    }
  }
}

// Standalone function
async function analyzeMessage({ apiToken, text }) {
  if (!apiToken) {
    throw new Error('A valid API token is required. Sign up at https://censorly.dev/ to get your token.');
  }
  if (!text) {
    throw new Error('Text is required for analysis.');
  }

  try {
    const response = await axios.post(
      'https://jwwodttgkwgvpnpxvgca.supabase.co/functions/v1/analyze-message',
      { text },
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error analyzing message: ${error.message}`);
  }
}

module.exports = {
  Censorly,
  analyzeMessage,
};
