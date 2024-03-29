import React from "react"
import { Contract } from "ethers"
import { useCall } from "@usedapp/core";
//import { useCall } from "react"

export { NFTList } from "./NFTList"


export function GetMyString(contract: Contract, meth: string) {
    const { value, error } = useCall({
        contract: contract,
        method: meth,
        args: [],
    }) ?? {};

    if (error) {
        console.log("Error: ", error.message);
        return undefined;
    }
    //console?.log(value[0]);
    return value
}