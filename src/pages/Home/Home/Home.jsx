import { useEffect, useState } from "react";
import Sales from "../../../components/Sales";
import { FaMoneyBillAlt } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import RightSide from "../RightSide/RightSide";

const Home = () => {
    const [productData, setProductData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("sellData.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProductData(data);
                setFilteredProducts(data);
            })
    }, [])

    let profit = 0;
    let totalSell = 0;
    let totalReturn = 0;
    filteredProducts?.forEach(product => {
        totalSell += product.productPrice * product.sellingAmount;
        totalReturn += product.productPrice * product.returnAmount;
        profit += product.productPrice * product.profitPerProduct;
    })

    // console.log(totalPrice);

    const handleFilterOption = (event) => {
        const filter = event.target.value;
        if (filter == "Last Weeks") {
            const currentDate = new Date();
            const lastWeekStart = new Date();
            console.log(currentDate);
            lastWeekStart.setDate(currentDate.getDate() - 7);

            const filtered = productData.filter((product) => {
                const sellingDate = new Date(product.sellingDate);
                return sellingDate >= lastWeekStart;
            });

            setFilteredProducts(filtered);
        }

        if (filter == "This Month") {
            const currentDate = new Date();
            const lastMonthStart = new Date();
            lastMonthStart.setMonth(currentDate.getMonth() - 1);

            const filtered = productData.filter((product) => {
                const sellingDate = new Date(product.sellingDate);
                return sellingDate >= lastMonthStart;
            });

            setFilteredProducts(filtered);
        }
        if (filter == "All") {
            setFilteredProducts(productData);
        }

    }


    return (
        <div className="min-h-screen lg:flex lg:gap-6 px-4">
            {/* Left Side  */}
            <div className="space-y-5">
                <Sales
                    handleFilterOption={handleFilterOption} />
                <div className="card w-64 lg:w-96 bg-gradient-to-b from-yellow-500 to-transparent shadow-xl border border-white">
                    <div className="card-body text-white">
                        <div className="card-actions justify-start text-3xl lg:text-5xl">
                            <FaMoneyBillAlt />
                        </div>
                        <p className="text-xl lg:text-2xl font-bold text-green-400">Total sales</p>
                        <h2 className="text-4xl lg:text-6xl font-light">${totalSell}</h2>
                    </div>
                </div>
                <div className="card w-64 lg:w-96 bg-gradient-to-b from-blue-900 to-transparent shadow-xl border border-white">
                    <div className="card-body text-white">
                        <div className="card-actions justify-start text-3xl lg:text-5xl">
                            <GiReturnArrow />
                        </div>
                        <p className="text-xl lg:text-2xl font-bold text-red-500">Total return</p>
                        <h2 className="text-4xl lg:text-6xl font-light">${totalReturn}</h2>
                    </div>
                </div>
                <div className="card w-64 lg:w-96 bg-gradient-to-b from-green-900 to-transparent shadow-xl border border-white">
                    <div className="card-body text-white">
                        <div className="card-actions justify-start text-3xl lg:text-5xl">
                            <FaMoneyBillAlt />
                        </div>
                        <p className="text-xl lg:text-2xl font-bold text-blue-400">Profit</p>
                        <h2 className="text-4xl lg:text-6xl font-light">${profit}</h2>
                    </div>
                </div>
            </div>
            {/* Right side  */}
            <RightSide 
            data={filteredProducts}
            />
        </div>
    );
};

export default Home;