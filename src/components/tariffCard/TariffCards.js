import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { applications } from "../../constants";
import TariffCard from "./TariffCard";
import classes from "./TariffCard.module.scss";
import { v4 } from "uuid";

const TariffCards = ({ openModal }) => {
    const [appInfo, setAppInfo] = useState([]);
    const pageId = useParams();

    useEffect(() => {
        if (pageId.id === "netflix") {
            setAppInfo(applications.netflix);
            return;
        }

        if (pageId.id === "youtube") {
            setAppInfo(applications.youtube);
            return;
        }

        if (pageId.id === "spotify") {
            setAppInfo(applications.spotify);
            return;
        }
    }, [pageId]);

    return (
        <div className={classes.tariffCards}>
            {appInfo.map((card) => {
                return <TariffCard openModal={openModal} key={v4()} tariff={card} />;
            })}
        </div>
    );
};

export default TariffCards;
