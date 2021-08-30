import { ComposePreparedOptions, MergePropsResult } from './types';
export declare const NullRender: () => null;
/**
 * Helper utility which resolves the slots and slot props derived from user input.
 */
export declare function resolveSlotProps<TProps, TState = TProps>(result: MergePropsResult<TState>, options: ComposePreparedOptions<TProps, TState>): MergePropsResult<TState>;
