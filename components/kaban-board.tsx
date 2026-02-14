"use client";

import { Board, Column } from "@/lib/models/models.types";
import {
  Award,
  Calendar,
  CheckCircle2,
  Key,
  Mic,
  MoreVertical,
  Trash2,
  XCircle,
} from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
// import {  } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface KanBoardProps {
  board: Board;
  userId: string;
}
interface ColConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<{ color: string; icon: React.ReactNode }> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="h-4 w-14" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-green-400",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-5 w-5" />,
  },
];
function DropableColumn({
  column,
  config,
  boardId,
}: {
  column: Column;
  config: ColConfig;
  boardId: string;
}) {
  return (
    <Card className="min-w-10 flex-shrink-0 shadow-md p=0">
      <CardHeader className={`${config.color} text-white rounded-t-lg pb-3 pt-3`}> 
        <div className="flex items-center justify-between">
          <div className="flex items-center gsp-2">
            {config.icon}
            <CardTitle className="text-white text-base font-semibold">{column.name}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size='icon' className="h-6 w-6 text-white hover:bg-white/20">
                  <MoreVertical className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4"/>
                  Delete Column
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export function KanbanBoard({ board, userId }: KanBoardProps) {
  const columns = board.columns;

  return (
    <>
      <div>
        <div>
          {columns.map((col, key) => {
            const config = COLUMN_CONFIG[key] || {
              color: "bg-gray-500",
              icon: <Calendar className="h-4 w-4" />,
            };
            return (
              <>
                <DropableColumn
                  key={key}
                  column={col}
                  config={config}
                  boardId={board._id}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
