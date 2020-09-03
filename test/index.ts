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

    console.log(result);

    expect(result[0].code).to.be.string;
    expect(result[0].name).to.be.string;
  });
});
