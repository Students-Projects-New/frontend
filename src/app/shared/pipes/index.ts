import { CapitalizePipe } from './capitalize.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';
import { RemoveWhitespacePipe } from './remove-whitespace.pipe';

export const pipes = [
    CapitalizePipe,
    TruncateTextPipe,
    RemoveWhitespacePipe
];

export * from './capitalize.pipe';
export * from './truncate-text.pipe';
export * from './remove-whitespace.pipe';