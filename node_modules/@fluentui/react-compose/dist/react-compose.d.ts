import * as React from 'react';

export declare interface BaseSlots {
    root: React.ElementType;
}

/**
 * Generic set of module to class name map.
 */
export declare type ClassDictionary = Record<string, string>;

/**
 * Generic class resolver function type.
 */
export declare type ClassFunction = (state: GenericDictionary, slots: GenericDictionary) => ClassDictionary;

export declare interface ComponentProps {
    as?: React.ElementType;
    className?: string;
}

export declare type ComponentWithAs<TElementType extends keyof JSX.IntrinsicElements = 'div', TProps = {}> = (<TExtendedElementType extends React.ElementType = TElementType>(props: Omit<PropsOfElement<TExtendedElementType>, 'as' | keyof TProps> & {
    as?: TExtendedElementType;
} & TProps) => JSX.Element) & {
    propTypes?: React.WeakValidationMap<TProps> & {
        as: React.Requireable<string | ((props: any, context?: any) => any) | (new (props: any, context?: any) => any)>;
    };
    contextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<TProps & {
        as: TElementType;
    }>;
    displayName?: string;
    /**
     * A hack to simplify the resolution for ComponentWithAs.
     * @see https://github.com/microsoft/fluentui/pull/13841
     */
    readonly __PRIVATE_PROPS?: Omit<PropsOfElement<TElementType>, 'as' | keyof TProps> & {
        as?: TElementType;
    } & TProps;
};

export declare function compose<TElementType extends keyof JSX.IntrinsicElements, TInputProps, TInputStylesProps, TParentProps, TParentStylesProps>(input: Input<TElementType, TInputProps>, inputOptions?: ComposeOptions<TInputProps, TInputStylesProps, TParentProps, TParentStylesProps>): ComponentWithAs<TElementType, TInputProps & TParentProps>;

export declare type ComposedComponent<TProps = {}> = React.FunctionComponent<TProps> & {
    fluentComposeConfig: Required<ComposePreparedOptions>;
};

export declare type ComposeOptions<TInputProps = {}, TInputStylesProps = {}, TParentProps = {}, TParentStylesProps = {}, TState = TParentProps & TInputProps> = {
    className?: string;
    classes?: ClassDictionary | ClassFunction | (ClassDictionary | ClassFunction)[];
    displayName?: string;
    mapPropsToStylesProps?: (props: TParentStylesProps & TInputProps) => TInputStylesProps;
    handledProps?: (keyof TInputProps | 'as')[];
    overrideStyles?: boolean;
    slots?: Record<string, React.ElementType>;
    slotProps?: (props: TParentProps & TInputProps) => Record<string, object>;
    shorthandConfig?: ShorthandConfig<TParentProps & TInputProps>;
    state?: (props: TState, ref: React.Ref<HTMLElement>, options: ComposePreparedOptions) => any;
};

/**
 * Merged ComposeOptions.
 */
export declare type ComposePreparedOptions<TProps = {}, TInputState = any, TParentState = TProps> = {
    className: string;
    classes: (undefined | ClassDictionary | ClassFunction)[];
    displayName: string;
    displayNames: string[];
    mapPropsToStylesPropsChain: ((props: object) => object)[];
    render: ComposeRenderFunction;
    handledProps: (keyof TProps | 'as')[];
    overrideStyles: boolean;
    slots: Record<string, React.ElementType> & {
        __self: React.ElementType;
    };
    slotProps: ((props: TProps) => Record<string, object>)[];
    state: (props: TParentState, ref: React.Ref<HTMLElement>, options: ComposePreparedOptions) => TInputState;
    resolveSlotProps: <TResolvedProps>(props: TResolvedProps) => Record<string, object>;
    shorthandConfig: ShorthandConfig<TProps>;
};

export declare type ComposeRenderFunction<TElementType extends React.ElementType = 'div', TProps = {}, TState = TProps> = (props: TProps, ref: React.Ref<TElementType extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TElementType] : TElementType>, options: ComposePreparedOptions & {
    state: any;
}) => React.ReactElement | null;

/**
 * `createClassResolver` is a factory function which creates a state to classmap resolver for
 * slot specific class names. It can be used in conjunction with the `compose` option `classes` to
 * inject css modules without writing cx(...) logic manually distributing classnames.
 *
 * Class names which map to slots are automatically distributed to correct slot props.
 *
 * Class names with an underscore are interpretted as enum matchable classes. For example,
 * the class "size_large" would be applied to the `root` slot when the component's state contains
 * a prop `size` with a value `large`.
 *
 * Remaining class names would be interpretted as modifiers, applied to the `root` slot when
 * the component `state` contains a truthy matching prop name.
 */
export declare const createClassResolver: (classes: Record<string, string>) => (state: Record<string, any>) => Record<string, string>;

/**
 * Generic name to any dictionary.
 */
export declare type GenericDictionary = Record<string, any>;

export declare type Input<TElementType extends React.ElementType = 'div', TProps = {}> = InputComposeComponent<TProps> | ComposeRenderFunction<TElementType, TProps & {
    as?: React.ElementType;
}>;

export declare type InputComposeComponent<TProps = {}> = React.FunctionComponent<TProps> & {
    fluentComposeConfig?: Required<ComposePreparedOptions>;
};

/**
 * Merge props takes in state and compose options, and resolves slots and slotProps.
 * It's expected that the component will call mergeProps(state, options) from within
 * render; after resolving state and before rendering slots and slotProps.
 */
export declare function mergeProps<TProps, TState = TProps, TSlots = GenericDictionary, TSlotProps = {
    [key in keyof TSlots]: any;
}>(state: TState, options: ComposePreparedOptions<TProps, TState>): MergePropsResult<TState, TSlots, TSlotProps>;

export declare type MergePropsResult<TState extends GenericDictionary, TSlots = GenericDictionary, TSlotProps = {
    [key in keyof TSlots]: any;
}> = {
    state: TState;
    slots: TSlots;
    slotProps: TSlotProps;
};

/**
 * Merge props for a slot to a slot prop.
 * @param slotProp - Slot prop.
 * @param slotProps - Props for the slot.
 * @param mappedProp - Optional mapped prop name for the slotProp after merging.
 */
export declare function mergeSlotProp<TProps>(slotProp: SlotProp<TProps>, slotProps: TProps, mappedProp?: string): SlotProp<TProps>;

export declare type ObjectSlotProp<TProps extends GenericDictionary> = TProps & {
    children?: TProps['children'] | SlotPropRenderFunction<TProps>;
};

export declare type PropsOfElement<E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> | ComponentWithAs> = E extends {
    __PRIVATE_PROPS: any;
} ? E['__PRIVATE_PROPS'] : JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export declare interface ShorthandConfig<TProps> {
    mappedProp?: keyof TProps;
    mappedArrayProp?: keyof TProps;
    allowsJSX?: boolean;
}

export declare type SlotProp<TProps> = React.ReactChild | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined | ObjectSlotProp<TProps>;

export declare type SlotPropRenderFunction<TProps> = (Component: React.ElementType<TProps>, props: TProps) => React.ReactNode;

export declare type SlotProps<TSlots extends BaseSlots, TProps, TRootProps extends React.HTMLAttributes<HTMLElement>> = {
    [key in keyof Omit<TSlots, 'root'>]: key extends keyof TProps ? TProps[key] : any;
} & {
    root: TRootProps;
};

export { }
