Language Detection API Node.js Client
===

[![npm version](https://badge.fury.io/js/detectlanguage.svg)](https://badge.fury.io/js/detectlanguage)
[![Build Status](https://travis-ci.org/detectlanguage/detectlanguage-node.svg?branch=master)](https://travis-ci.org/detectlanguage/detectlanguage-node)

JavaScript wrapper for [Language Detection API](https://detectlanguage.com/).

## Installation

```
npm install detectlanguage [--save]
```

## Configuration

Before using Detect Language API client you have to setup your personal API key.
You can get it by signing up at [detectlanguage.com](https://detectlanguage.com)

```javascript
var DetectLanguage = require('detectlanguage');
var detectLanguage = new DetectLanguage({
    key: '[INSERT YOUR KEY HERE]',
    ssl: true|false (defaults to TRUE)
});
```

## Usage

### Language Detection

Takes a text string and returns a list of detections.

```javascript
var text = "I am a Teapot and a Submarine";
detectLanguage.detect(text, function(error, result) {
    console.log(JSON.stringify(result));
});
```

#### Response

```javascript
{
  data: {
    detections: [
      {
        language: "en",
        isReliable: true,
        confidence: 7.85
      }
    ]
  }
}
```

### Batch Detection (recommended)

Takes an array of texts and returns a list of detections.
It is much faster than doing request for each text individually.

```javascript
var texts = [
    "I am a Teapot and a Submarine",
    "Soy una tetera y un submarino",
    "Jeg er en tekande og en ubåd"
]
detectLanguage.detect(texts, function(error, result) {
    console.log(JSON.stringify(result));
});
```

#### Response

```javascript
{
  data: {
    detections: [
      [
        {
          language: "en",
          isReliable: true,
          confidence: 7.85
        }
      ],
      [
        {
          language: "es",
          isReliable: true,
          confidence: 3.75
        }
      ],
      [
        {
          language: "da",
          isReliable: true,
          confidence: 4.09
        }
      ]
    ]
  }
}
```

### Supported Languages

Returns the list of supported languages.

```javascript
detectLanguage.languages(function(error, result) {
    console.log(JSON.stringify(result));
});
```

#### Response

```javascript
[
  {
    code: "ab",
    name: "ABKHAZIAN"
  },
  {
    code: "aa",
    name: "AFAR"
  },
  {
    code: "af",
    name: "AFRIKAANS"
  }
  ...
]
```

### User Status

Returns information about your account and it's status.

```javascript
detectLanguage.status(function(error, result) {
    console.log(JSON.stringify(result));
});
```

#### Response

```javascript
{
  date: "2015-02-21",
  requests: 31,
  bytes: 429,
  plan: "FREE",
  plan_expires: null,
  daily_requests_limit: 5000,
  daily_bytes_limit: 1048576,
  status: "ACTIVE"
}
```

## Author

Peter Andreas Moelgaard ([GitHub](https://github.com/pmoelgaard), [Twitter](https://twitter.com/petermoelgaard))

## License

Licensed under the Apache License, Version 2.0: [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
