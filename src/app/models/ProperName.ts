import { Wordstem } from "./Wordstem";

export interface ProperName {
    properNounID: number;
    currentNoun: string;
    etymoNoun: string;
    wordStemsPC: string[];
    descrFr: string;
    descrEng: string;
    wordtheme: number;
    semanticField: number;
} 