import {TableColumn} from "react-data-table-component";
import {DataRow, DeployData} from "../types/deployments.types";
import {CommonTable} from "../components/common/commonTable";
import {dummyData} from "../data/dummy_data";
import React from "react";
import {h} from "../helpers";

export function SDK ({expandableRows = false, expandOnRowClicked = false}:
                         {expandableRows?: boolean, expandOnRowClicked?:boolean}) {

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Title',
            selector: (row: { repo: string; }) => row.repo,
            sortable: true
        },
        {
            name: 'Development',
            selector: (row: { development: DeployData}) => h.general.handleEmpty(row.development.date as string, "Not yet deployed"),
            sortable: true,
        },
        {
            name: 'Staging',
            selector: (row: { staging: DeployData }) => h.general.handleEmpty(row.staging.date as string, "Not yet deployed"),
            sortable: true
        },
        {
            name: 'Production',
            selector: (row: { production: DeployData }) => h.general.handleEmpty(row.production.date as string, "Not yet deployed"),
            sortable: true
        },
    ];

    const data = dummyData

    const ExpandedComponent = ({ data }: {data: DataRow}): JSX.Element => {
        return <pre>{JSON.stringify(data, null, 2)}</pre>;
    };


    return (
        <CommonTable
            columns={columns}
            data={data}
            expandedComponent={ExpandedComponent}
            expandableRows={expandableRows}
            expandOnRowClicked={expandOnRowClicked}
        />
    )
}