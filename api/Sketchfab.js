import ApiKeys from '../constants/ApiKeys';

class Sketchfab {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.sketchfab.com/v3';
  }

  async searchModels(query) {
    const url = `${this.baseUrl}/search?type=models&q=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${this.apiKey}`,
      },
    });
    const data = await response.json();
    return data.results;
  }

  async getModel(uid) {
    const url = `${this.baseUrl}/models/${uid}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${this.apiKey}`,
      },
    });
    const data = await response.json();
    return data;
  }
}

export default new Sketchfab(ApiKeys.Sketchfab);
