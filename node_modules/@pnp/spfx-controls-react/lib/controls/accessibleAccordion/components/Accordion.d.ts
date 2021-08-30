/// <reference types="react" />
import "../css/AccordionStylesOverride.css";
import { DivAttributes } from "../helpers/types";
import { UUID } from "./ItemContext";
declare type AccordionProps = Pick<DivAttributes, Exclude<keyof DivAttributes, 'onChange'>> & {
    className?: string;
    preExpanded?: UUID[];
    allowMultipleExpanded?: boolean;
    allowZeroExpanded?: boolean;
    onChange?(args: UUID[]): void;
};
declare const Accordion: ({ className, allowMultipleExpanded, allowZeroExpanded, onChange, preExpanded, ...rest }: AccordionProps) => JSX.Element;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map