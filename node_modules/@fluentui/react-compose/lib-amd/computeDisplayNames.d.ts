import { ComposeOptions, ComposePreparedOptions } from './types';
/**
 * Given input/parent options, which are both assumed to be defined and populated with
 * displayNames array, return a string array of display names.
 */
export declare function computeDisplayNames(inputOptions: ComposeOptions, parentOptions: ComposePreparedOptions): string[];
