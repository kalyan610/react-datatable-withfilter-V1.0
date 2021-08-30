import { ComposePreparedOptions, GenericDictionary, MergePropsResult } from './types';
/**
 * Helper utility which takes in a classes array from compose options, resolves functions,
 * merges them into a final result, and distributes classnames to slotProps within the given
 * resolver result object.
 */
export declare function resolveClasses<TState>(result: MergePropsResult<TState>, classes: ComposePreparedOptions['classes']): MergePropsResult<TState>;
export declare function appendToSlotClassName(slotProps: Record<string, GenericDictionary>, slotName: string, className: string): void;
