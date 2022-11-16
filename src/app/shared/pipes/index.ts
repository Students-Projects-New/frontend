import { CapitalizePipe } from './capitalize.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';

export const pipes = [
    CapitalizePipe,
    TruncateTextPipe
];

export * from './capitalize.pipe';
export * from './truncate-text.pipe';