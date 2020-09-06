import DetectLanguage, { DetectLanguageAPI, DetectLanguageError } from '../src/index';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

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

  it('detects language', async () => {
    detectLanguage = DetectLanguage('invalid');

    await expect(detectLanguage.detect('hello')).to.be.rejected;
  });
});

describe('detectCode', function () {
  it('detects language code', async () => {
    const result = await detectLanguage.detectCode('vidur prūdo bliūdas plūdur');

    expect(result).to.eq('lt')
  });

  it('handles not detected', async () => {
    const result = await detectLanguage.detectCode('?');

    expect(result).to.be.null;
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

    expect(result[0].code).to.be.a('string');
    expect(result[0].name).to.be.a('string');
  });
});

describe('userStatus', function () {
  it('fetches user status', async () => {
    const result = await detectLanguage.userStatus();

    expect(result.status).to.be.a('string');
    expect(result.requests).to.be.a('number');
  });
});
