import React from "react";
import classes from "./Subscription.module.scss";
import Referal from "../../components/referal/Referal";
import Faq from "../../components/faq/Faq";
import SelectButtons from "../../components/UI/SelectButtons/SelectButtons";
import { useParams } from "react-router-dom";
import TariffCards from "../../components/tariffCard/TariffCards";
import { faqData } from "../../constants";
const SubscriptionPlan = () => {
    const pageId = useParams();

    return (
        <div className={classes.SubscriptionPlan}>
            <div className="container">
                <div className={classes.SubscriptionPlan__body}>
                    <div className={classes.SubscriptionPlan__content}>
                        <div className={classes.SubscriptionPlan__heading}>
                            <h2 className={classes.SubscriptionPlan__title}>Choose a {pageId.id[0].toUpperCase() + pageId.id.slice(1)} Plan</h2>
                            <p className={classes.SubscriptionPlan__subtitle}>Listen without limits at a bargain price</p>
                            <div className={classes.SubscriptionPlan__tariffButtons}>
                                <SelectButtons />
                            </div>
                        </div>
                        <div className={classes.SubscriptionPlan__tariffCards}>
                            <TariffCards />
                        </div>
                        <Referal />
                    </div>
                    <Faq title={"FAQ"} faqData={faqData.short} />
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlan;
