import React from 'react';
import DataTable from 'react-data-table-component';
import {commonTable} from "../../types/deployments.types";

export function CommonTable<T>({
                                   columns,
                                   data,
                                   expandedComponent,
                                   expandableRows = false,
                                   expandOnRowClicked = false
                               }: commonTable<T>) {


    return (
        <DataTable
            title="SDK (Stale Deployments Killer) "
            columns={columns}
            data={data}
            expandableRows={expandableRows}
            expandableRowsComponent={expandedComponent}
            expandOnRowClicked={expandOnRowClicked}
            pagination
        />
    )
}