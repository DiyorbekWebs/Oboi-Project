import React from "react";
import Consultation from "../../components/consultation/consultation";
import Carusel1 from "../../components/HeroHome/Carusel1";
import Layout from "../../Layout/Layout";

export default function Home() {
    return <>
        <Layout>
            <Carusel1/>
            <Consultation/>
        </Layout>
    </>;
}
