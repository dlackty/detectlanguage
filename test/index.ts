import DetectLanguage, { DetectLanguageAPI } from '../src/index';
import { expect } from 'chai';

const API_KEY = process.env.DETECTLANGUAGE_API_KEY || '';
let detectLanguage: DetectLanguageAPI;

beforeEach(() => {
  detectLanguage = DetectLanguage(API_KEY);
})

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
