
import React, { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { createStyles } from '@mantine/core';
import { Link } from "react-router-dom"
import { WalletConnect } from "../WalletConnect/WalletConnect"




const NavBarX = () => {




    const [active, setActive] = useState(window.location.pathname);

    console.log(window.location.pathname)
    //console.log(window.location.href)


    const useStyles = createStyles((theme) => ({


        container: {
            flexDirection: 'row',
        },


        links: {
            [theme.fn.smallerThan('sm')]: {
                display: 'none',
            },
        },


        link: {
            flexDirection: 'row',
            display: 'block',
            lineHeight: 1,
            padding: '8px 12px',
            borderRadius: theme.radius.sm,
            textDecoration: 'none',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: theme.fontSizes.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            },

            [theme.fn.smallerThan('sm')]: {
                borderRadius: 0,
                padding: theme.spacing.md,
            },
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            },
        },
    }));


    const { classes, cx } = useStyles();



    return (
        <Navbar className="bg-light shadow-sm mb-3">
            <Container>
                <Nav className={classes.container}  >

                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/" })}
                        onClick={(event) => {
                            setActive("/");
                        }}

                        to="/">Kripto Çekilişi</Link>

                    {"   "}


                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/token" })}
                        onClick={(event) => {
                            setActive("/token");
                        }}

                        to="/token">Tokenlar</Link>

                    {"   "}

                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/bilgi" })}
                        onClick={(event) => {
                            setActive("/bilgi");
                        }} to="/bilgi">Gerekli Bilgiler</Link>

                    {"  "}

                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/about" })}
                        onClick={(event) => {
                            setActive("/about");
                        }} to="/about">Hakkımda</Link>
                    {"  "}
                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/donate" })}
                        onClick={(event) => {
                            setActive("/donate");
                        }} to="/donate">Donate</Link>
                </Nav>
                <WalletConnect />
            </Container>

        </Navbar>
    )

}

export { NavBarX }