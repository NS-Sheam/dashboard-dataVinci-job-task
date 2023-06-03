
const Sales = ({ handleFilterOption }) => {
    return (
        <select defaultValue={"All"} onClick={handleFilterOption} className="select select-bordered max-w-xs bg-primaryBg text-white border-white">
            <option>All</option>
            <option>This Month</option>
            <option>Last Weeks</option>
        </select>
    );
};

export default Sales;