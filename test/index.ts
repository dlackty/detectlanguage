import DetectLanguage, { DetectLanguageAPI } from '../src/index';
import { expect } from 'chai';

const API_KEY = process.env.DETECTLANGUAGE_API_KEY || '';
let detectLanguage: DetectLanguageAPI;

beforeEach(() => {
  detectLanguage = DetectLanguage(API_KEY);
})

describe('detect', function () {
  it('detects language', async () => {
    const result = await detectLanguage.detect('labas rytas');

    expect(result[0].language).to.eq('lt')
    expect(result[0].isReliable).to.eq(true)
    expect(result[0].confidence).to.be.a('number')
  });
});

describe('detectCode', function () {
  it('detects language code', async () => {
    const result = await detectLanguage.detectCode('vidur prūdo bliūdas plūdur');

    expect(result).to.eq('lt')
  });
});

describe('detectBatch', function () {
  it('detects languages', async () => {
    const result = await detectLanguage.detectBatch(['šešios žąsys', 'Strč prst skrz krk']);

    expect(result[0][0].language).to.eq('lt');
    expect(result[1][0].language).to.eq('cs');
  });
});

describe('languages', function () {
  it('fetches languages', async () => {
    const result = await detectLanguage.languages();

    expect(result[0].code).to.be.string;
    expect(result[0].name).to.be.string;
  });
});

describe('userStatus', function () {
  it('fetches user status', async () => {
    const result = await detectLanguage.userStatus();

    expect(result.status).to.be.a('string');
    expect(result.requests).to.be.a('number');
  });
});
