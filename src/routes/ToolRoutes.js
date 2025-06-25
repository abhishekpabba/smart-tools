
import WordCounter from '../tools/WordCounter';
import CharacterCounter from '../tools/CharacterCounter';
import ReadTimeEstimator from '../tools/ReadTimeEstimator';
import RemoveDuplicateLines from '../tools/RemoveDuplicateLines';
import CaseConverter from '../tools/CaseConverter';
import TextSorter from '../tools/TextSorter';

export const ToolRoutes = [
  { path: '/tools/word-counter', component: WordCounter, category: 'Text Tools' },
  { path: '/tools/character-counter', component: CharacterCounter, category: 'Text Tools' },
  { path: '/tools/read-time-estimator', component: ReadTimeEstimator, category: 'Text Tools' },
  { path: '/tools/remove-duplicate-lines', component: RemoveDuplicateLines, category: 'Text Tools' },
  { path: '/tools/case-converter', component: CaseConverter, category: 'Text Tools' },
  { path: '/tools/text-sorter', component: TextSorter, category: 'Text Tools' },
];
