import PropTypes from "prop-types";

const Select = ({ children, className, onChange }) => {
    return (
        <select
            onChange={onChange}
            className={`h-full w-full rounded-[7px] border border-yellow bg-transparent px-3 py-[11.5px] text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${className}`}
        >
            {children}
        </select>
    );
};

Select.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
};
export default Select;
