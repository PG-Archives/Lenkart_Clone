import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProduct } from "../../actions/productAction.js";


const Dashboard = () => {

    const dispatch = useDispatch();

    const {products} = useSelector((state) => state.products);

    let outOfStock = 0;

    products && products.forEach((item) => {
        if(item.Stock === 0) {
            outOfStock++;
        }
    });

    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    useEffect(() => {
        const lineState = {
            labels: ["Initial Amount", "Amount Earned"],
            datasets: [
                {
                    label: "TOTAL AMOUNT",
                    backgroundColor: ["tomato"],
                    hoverBackgroundColor: ["rgb(197, 72, 49)"],
                    data: [0, 350000],
                },
            ],
        };
        const lineChart = new Chart(document.getElementById("lineChart"), {
            type: "line",
            data: lineState,
        });

        const doughnutState = {
            labels: ["Out of Stock", "InStock"],
            datasets: [
                {
                    backgroundColor: ["#00A6B4", "#6800B4"],
                    hoverBackgroundColor: ["#4B5000", "#35014F"],
                    data: [outOfStock, products.length - outOfStock],
                },
            ],
        };
        const doughnutChart = new Chart(document.getElementById("doughnutChart"), {
            type: "doughnut",
            data: doughnutState,
        });
    }, []);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>
                <div className="dashboardSummary">
                    <div>
                        
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p>Product</p>
                            <p>{products && products.length}</p>
                        </Link>
                        <Link to="/admin/orders">
                            <p>Orders</p>
                            <p>4</p>
                        </Link>
                        <Link to="/account">
                            <p>Users</p>
                            <p>3</p>
                        </Link>
                    </div>
                </div>
                <div className="lineChart">
                    <canvas id="lineChart"></canvas>
                </div>
                <div className="doughnutChart">
                    <canvas id="doughnutChart"></canvas>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
