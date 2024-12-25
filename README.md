# Censorly

Censorly is a Node.js SDK for interacting with the [Censorly API](https://censorly.dev/), a powerful AI-powered text moderation service. This package simplifies integration by providing easy-to-use methods for analyzing text.

## Installation

Install the package using npm:

```bash
npm install censorly
```

## Usage

First, import the `Censorly` SDK and create an instance with your API token.

## Requirement: API Token
To use this SDK, you must sign up for an account on [Censorly](https://censorly.dev/) and obtain an API token in [Dashboard](https://censorly.dev/dashboard).


### Example Using Censorly Class

```javascript
import Censorly from 'censorly';

// Initialize the SDK with your API token
const censorly = new Censorly('your_api_token');

// Analyze a message
async function analyzeText() {
  try {
    const result = await censorly.analyzeMessage('This is the text to analyze.');
    console.log('Analysis result:', result);
  } catch (error) {
    console.error('Error analyzing text:', error.message);
  }
}
analyzeText();
```

### Example Using Standalone Function
```Javascript
const { analyzeMessage } = require('censorly');

analyzeMessage({ apiToken: 'your_api_token', text: "Text to analyze" }) // Must be a valid Object
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

```

## Methods

### `analyzeMessage(text: string): Promise<object>`

Analyzes a given text for flagged topics.

#### Parameters:
- `text` (string): The text to be analyzed.

#### Returns:
A `Promise` resolving to the analysis result(JSON)

### Example Response

```json
{
  "flagged": boolean,    // Whether the content was flagged as inappropriate
  "topics": string[],    // Array of main topics identified in the text
  "confidence": number,  // Number from 0 to 1.0 indicating AI's certainty
  "language": string     // Two-letter language code (e.g., "en", "es") or "Unknown"
}
```

## License
```
This project is licensed under the MIT License.
```
