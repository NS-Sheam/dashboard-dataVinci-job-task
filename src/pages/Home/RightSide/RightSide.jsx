import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const RightSide = ({ data }) => {
    // console.log(data);
    const addFilter = data?.map(d => {
        d.sales = d.productPrice * d.sellingAmount;
        d.return = d.productPrice * d.returnAmount;
        d.profit = d.productPrice * d.profitPerProduct;
        return d;
    })
    // console.log(addFilter);
    return (
        <div>
            <div className=" p-4 lg:p-6">
                <h2 className="text-2xl text-white font-bold lg:my-4">Sell Summery</h2>
                {/* for Mobile devices */}
                <AreaChart
                    className="lg:hidden"
                    width={250}
                    height={200}
                    data={addFilter}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 30
                    }}
                >
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis dataKey="sellingDate" tick={{ fill: 'white' }} angle={-30} dy={20} />
                    <YAxis tick={{ fill: 'white' }} angle={-30} dx={-20} />
                    <Tooltip />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="7.36%" stopColor="#FAFF00" />
                            <stop offset="99.62%" stopColor="rgba(220, 36, 48, 0)" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="12.55%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="rgba(123, 67, 151, 0)" />
                        </linearGradient>
                        {/* Define more gradients if needed */}
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="return"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                    <Area
                        type="monotone"
                        dataKey="profit"
                        stackId="1"
                        stroke="#8884d8"
                        fill={`url(#gradient2)`}
                    />
                    <Area
                        type="monotone"
                        dataKey="sales"
                        stackId="1"
                        stroke="#E03A45"
                        fill={`url(#gradient1)`}

                    />
                </AreaChart>

                {/* for large devices */}
                <AreaChart
                    className="hidden lg:block"
                    width={450}
                    height={400}
                    data={addFilter}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 30
                    }}
                >
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis dataKey="sellingDate" tick={{ fill: 'white' }} angle={-30} dy={20} />
                    <YAxis tick={{ fill: 'white' }} angle={-30} />
                    <Tooltip />
                    <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="7.36%" stopColor="#FAFF00" />
                            <stop offset="99.62%" stopColor="rgba(220, 36, 48, 0)" />
                        </linearGradient>
                        <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="12.55%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="rgba(123, 67, 151, 0)" />
                        </linearGradient>
                        {/* Define more gradients if needed */}
                    </defs>
                    
                    <Area
                        type="monotone"
                        dataKey="return"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                    <Area
                        type="monotone"
                        dataKey="profit"
                        stackId="1"
                        stroke="#8884d8"
                        fill={`url(#gradient4)`}
                    />
                    <Area
                        type="monotone"
                        dataKey="sales"
                        stackId="1"
                        stroke="#E03A45"
                        fill={`url(#gradient3)`}

                    />
                </AreaChart>
            </div>
            <div className="overflow-x-auto text-white border border-white rounded-md my-4 w-3/4 lg:w-full">
                <table className="table">
                    <thead>
                        <tr className="text-white font-bold text-xs lg:text-xl">
                            <th></th>
                            <th>Date</th>
                            <th>Sells</th>
                            <th>Return</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addFilter?.map((product, i) => <tr key={i} className="text-sx lg:text-xl">
                                <th>{i + 1}</th>
                                <td>{product.sellingDate}</td>
                                <td>$ {product.sales}</td>
                                <td>$ {product.return}</td>
                                <td>$ {product.profit}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RightSide;