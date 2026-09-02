import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Datepicker() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Popover>

      {/* What the user clicks */}
      <PopoverTrigger asChild>
        <Button variant="outline">
           <i className="fa-solid fa-calendar text-sm"></i> {date.toLocaleDateString()} 
           <i class="fa-solid fa-chevron-down texl-sm"></i>
        </Button>
      </PopoverTrigger>

      {/* What appears after clicking */}
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
        />
      </PopoverContent>

    </Popover>
  )
}