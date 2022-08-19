import {TableColumn} from "react-data-table-component";
import {Name} from "./generic.types";

export interface DataRow {
    repo: string;
    development: DeployData;
    staging: DeployData;
    production: DeployData;
}

export interface DeployData {
    deployed_by?: Name,
    approved_by?: Name,
    date?: string,
    url?: string
}

export interface commonTable<T> {
    columns: TableColumn<T>[],
    data: Array<T>,
    expandedComponent: ({data}: { data: T; }) => JSX.Element,
    expandableRows?: boolean,
    expandOnRowClicked?: boolean
}
