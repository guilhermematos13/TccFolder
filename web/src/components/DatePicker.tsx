import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ptBR } from 'date-fns/locale'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    date: Date | undefined
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export function DatePicker({ date, setDate }: DatePickerProps) {

    const isDayDisabled = (day: Date) => {
        return day < new Date();
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "text-left font-normal text-foreground",
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4 text-foreground" />
                    {date ? format(date, "dd/MM/yy") : <span className="text-foreground">Selecione uma data</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    locale={ptBR}
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={isDayDisabled}
                />
            </PopoverContent>
        </Popover>
    )
}