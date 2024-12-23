 const axios = require('axios');

class Censorly {
  constructor(apiToken) {
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
            'Authorization': `Bearer ${this.apiToken}`,
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

module.exports = Censorly;
