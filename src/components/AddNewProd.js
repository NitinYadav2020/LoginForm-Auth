import React from "react";
import './AddNew.css';
import { Header } from "./Header/Header";
import DataEntryForm from "./DataEntryForm";

export const AddNewProd = () => {
    return(
    <div className="AddNewMain">
        <Header />
        <DataEntryForm />
    </div>);
};