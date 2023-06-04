import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const Stats = () => {
    const [productData, setProductData] = useState([]);
    const addFilter = productData?.map(d => {
        d.sales = d.productPrice * d.sellingAmount;
        d.return = d.productPrice * d.returnAmount;
        d.profit = d.productPrice * d.profitPerProduct;
        return d;
    })
    useEffect(() => {
        fetch("sellData.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProductData(data);
            })
    }, [])

    return (
        <div>
            <AreaChart
                className="hidden lg:block"
                width={800}
                height={600}
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
                <Area
                    type="monotone"
                    dataKey="return"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                />
            </AreaChart>
        </div>
    );
};

export default Stats;