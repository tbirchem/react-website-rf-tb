import React, {useEffect, useState} from "react";
import axios from "axios";
import {HorizontalBar} from "@reactchartjs/react-chart.js";


const Result = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get("https://62c91194d9ead251e8b7143e.mockapi.io/vote").then(
            (response) => {
                console.log(response.data);

                setResults(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const totalVotesA = results
        .map((item) => item.partyA)
        .reduce((prev, curr) => prev + curr, 0);

    const totalVotesB = results
        .map((item) => item.partyB)
        .reduce((prev, curr) => prev + curr, 0);

    const data = {
        labels: ["Girl", "Boy"],
        datasets: [
            {
                label: "# of Votes",
                data: [totalVotesA, totalVotesB, 0],
                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54,162,235,0.4)"],
                borderColor: ["rgba(255, 99, 132, 1)", "rgb(29,137,211)"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <HorizontalBar data={data} options={options} />
        </>
    );
};

export default Result;