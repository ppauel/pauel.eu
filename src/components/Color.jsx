/**
 * Colored Span
 * @param {Object} props
 * @param {string?} props.code Color (resolvable color)
 */
const Color = ({code, children}) => <span style={{ color: code ?? `#BCDBFF` }}>{children}</span>;

export default Color;