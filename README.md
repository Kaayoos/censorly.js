# Censorly

Censorly is a Node.js SDK for interacting with the [Censorly API](https://censorly.dev/), a powerful AI-powered text moderation service. This package simplifies integration by providing easy-to-use methods for analyzing text.

## Installation

Install the package using npm:

```bash
npm install censorly
```

## Usage

First, import the `Censorly` SDK and create an instance with your API token.

### Example

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

## Methods

### `analyzeMessage(text: string): Promise<object>`

Analyzes a given text for flagged topics.

#### Parameters:
- `text` (string): The text to be analyzed.

#### Returns:
A `Promise` resolving to the analysis result.

### Example Response

```json
{
  "flagged": boolean,    // Whether the content was flagged as inappropriate
  "reason": string,      // If flagged, explains why the content was flagged
  "topics": string[],    // Array of main topics identified in the text
  "confidence": number,  // Number from 0 to 1.0 indicating AI's certainty
  "language": string     // Two-letter language code (e.g., "en", "es") or "Unknown"
}
```

## Testing

Run tests with the following command:

```bash
npm test
```

## License
```
This project is licensed under the ISC License.
```
