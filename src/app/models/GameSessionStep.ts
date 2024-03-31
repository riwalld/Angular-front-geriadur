import { PCelticRadical } from "./PCelticRadical";
import { ProperName } from "./ProperName";
import { ResponseChoice } from "./ResponseChoice";


export interface GameSessionStep {
    proposedLiteralTranslationList:ResponseChoice[];
     properName: ProperName;
     pCelticRadicals: PCelticRadical[];

} 