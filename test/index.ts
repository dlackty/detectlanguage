import DetectLanguage, { DetectLanguageInstance } from '../lib/index';
import { expect } from 'chai';

const API_KEY = process.env.DETECTLANGUAGE_API_KEY || '';
let detectLanguage: DetectLanguageInstance;

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
