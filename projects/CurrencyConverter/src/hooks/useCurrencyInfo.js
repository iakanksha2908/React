import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {

    const [currencyData, setCurrencyData] = useState({})
    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
                console.log("API fetch successfully");
                const jsonRead = await response.json();
                console.log("json: ", jsonRead);

                if (jsonRead[currency]) {
                    setCurrencyData(jsonRead[currency]);
                } else {
                    console.error(`Currency ${currency} not found in response`);
                    setCurrencyData({});
                }
            } catch (error) {
                console.log("Error found", error);
                setCurrencyData({});
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return currencyData;
}

export default useCurrencyInfo;