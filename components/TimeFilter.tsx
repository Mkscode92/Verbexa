"use client";
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { durationRanges } from "@/constants";

const TimeFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [durationRange, setDurationRange] = useState({label: "Any", min: 0, max: 0})

    useEffect(() => {

        if (durationRange.label === "Any") {
            const newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["durationMin", "durationMax"],
            });

            router.push(newUrl, { scroll: false });
        } else {
            const params = new URLSearchParams(searchParams.toString());
            params.set("durationMin", String(durationRange.min));
            params.set("durationMax", String(durationRange.max));
            const newUrl = `?${params.toString()}`;

            router.push(newUrl, { scroll: false });
        }
    }, [durationRange]);

    return (
        <Select onValueChange={label => {
        const selected = durationRanges.find(r => r.label === label);
        setDurationRange(selected || {label: "Any", min: 0, max: 0});
    }}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Any">All Durations</SelectItem>
                {durationRanges.map((durationRange) => (
                    <SelectItem key={durationRange.label} value={durationRange.label} className="capitalize">
                        {durationRange.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default TimeFilter;