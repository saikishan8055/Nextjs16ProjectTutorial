"use client"

import { Board } from "@/lib/models/models.types"
import { Award, Calendar, CheckCircle2, Mic, XCircle } from "lucide-react";
import React from "react";

interface KanBoardProps {
    board :Board ,
    userId: string,
}

const COLUMN_CONFIG :Array<{color : string; icon:React.ReactNode}>=[
    {
color:'bg-cyan-500',
icon :<Calendar className="h-4 w-14"/>
    },
    {
            color:'bg-purple-500',
            icon:<CheckCircle2 className="h-4 w-4"/>
     },
     {
        color:'bg-green-400',
        icon:<Mic className="h-4 w-4"/>
     },
     {
        color:'bg-yellow-500',
        icon:<Award className="h-4 w-4"/>
     },
     {
        color:'bg-red-500',
        icon:<XCircle className="h-5 w-5"/>
     }

]



export function  KanbanBoard({board,userId}:KanBoardProps){
    
    return <>
    <div>
        <div>

        </div>
    </div>
    </>

}