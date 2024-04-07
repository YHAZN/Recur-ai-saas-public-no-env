"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("09bda8d5-65b8-4ba5-bd2a-8ef591ba0046");
    }, []);

    return null;
}