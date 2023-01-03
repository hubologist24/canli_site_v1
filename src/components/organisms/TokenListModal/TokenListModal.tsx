import { Button, ColorInput, Group, Modal, Space, TextInput, Text } from "@mantine/core"

import React, { useState, useEffect } from "react"
import { GetMyString } from "./"
import { token_contract } from "../../../lottery_hooks/token"
import { useEthers } from '@usedapp/core';
import { useContractFunction } from "@usedapp/core"
import { BigNumberish, ethers, utils } from "ethers"
import { Container, Header, Footer, Title, useMantineTheme, NavLink, createStyles } from '@mantine/core';
import { TokenImport } from "../../../utils/TokenImport"
import { StringMatcher } from "cypress/types/net-stubbing"


export const TokenListModal = () => {

    const [inputValue, setValue] = useState("0")
    const [inputAdress, setAdress] = useState("0")
    const [activateError, setActivateError] = useState<string | undefined>('')



    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        //console.log(newValue)//setValue(newValue)
        const inputAdress = e.currentTarget.id
        console.log("input adress öncesi")
        setAdress(inputAdress)
        setValue(newValue)

    }

    const { state, send } = useContractFunction(token_contract, "mintToken")
    const { status } = state

    const error = state.status === "Fail" || state.status === "Exception"

    const loading = state.status === "PendingSignature" || state.status === "Mining"
    const success = state.status === "Success"
    //const error = state.status === "Fail" || state.status === "Exception"

    useEffect(() => {
        if (error) {
            setActivateError(state.errorMessage)
        }
        return () => {

        }
    }, [state.status])

    function enter(token: string, name: string) {
        // console.log("enter lottery")
        void send(token, ethers.utils.parseUnits(String(supply), "ether"))
        TokenImport(token, name)
        //console.log(lottery_fee + "feeeeeeeeeeee")

    }

    function TokenImp(token: string, name: string) {
        // console.log("enter lottery")
        TokenImport(token, name)
        //console.log(lottery_fee + "feeeeeeeeeeee")

    }





    //document.querySelector("[data-name=" + CSS.escape(name) + "]");
    const supply = document.querySelector<HTMLInputElement>("input[id=" + CSS.escape(inputAdress) + "]")?.value;
    console.log(supply)
    //var element = document.querySelector("[data-name=" + name + "]");


    //const supply = document.querySelector<HTMLInputElement>('input[id="supply"]')?.value;
    //${CSS.escape(name)}
    //const supply = (<HTMLInputElement>document.getElementById(elementId)).value





    const theme = useMantineTheme();

    const useStyles = createStyles((theme) => ({


        div1: {
            //width: "250px",
            // height: "150px",
            flexDirection: 'row',
            fontSize: 18,
            backgroundColor: "violet",
            marginLeft: "-15px",
            marginRight: "-15px",
        },
        gr: {

            display: 'right',
            float: "right"


        },
        gr2: {
            flexDirection: 'row',
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "stretch",



        }


    }
    ))

    // className={cx(classes.img)
    const { classes, cx } = useStyles();



    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()


    const value = GetMyString(token_contract, "returnToken2", account!)
    console.log("value")
    console.log(value)

    //  <div className={cx(classes.div1)}>
    //<Group position="right" align="flex-start" >

    return (
        value?.map((a: any) => a.map((item: any) =>

            <>
                <div className={cx(classes.div1)}>
                    &nbsp;   Token İsmi:    {item.name}
                    &nbsp; Token Açıklaması:     {item.symbol}
                    <input placeholder="Miktar" id={item.token} style={{ width: 70 }} onChange={onChange}></input>
                    <Button onClick={() => enter(item.token, item.name)}
                    > Token Üret</Button>

                    <Button className={cx(classes.gr)} onClick={() => TokenImp(item.token, item.name)}
                    > Tokenı Metamaska İmport</Button>


                </div>


            </>

        )
        )


    )


















}
