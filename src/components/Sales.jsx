
const Sales = ({ setFilterOption }) => {
    const handleFilterOption = event => {
        const filter = event.target.value;
        setFilterOption(filter);
    }
    return (
        <select onClick={handleFilterOption} className="select select-bordered max-w-xs bg-primaryBg text-white border-white">
            <option selected>All</option>
            <option>Price</option>
            <option>Recent post</option>
        </select>
    );
};

export default Sales;