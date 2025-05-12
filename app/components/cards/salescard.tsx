"use client"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "May", desktop: 100, mobile: 130 },
  { month: "June", desktop: 314, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 120, mobile: 140 },
  { month: "June", desktop: 200, mobile: 140 },
]

// Updated chart config with blue colors
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(210, 80%, 55%)", // Blue color
  },
  mobile: {
    label: "Mobile",
    color: "hsl(210, 80%, 35%)", // Darker blue
  },
} satisfies ChartConfig

export function SalesCard() {
  return (
    <Card className="h-7/12">
      <CardHeader>
        <CardTitle>Sales Analytics</CardTitle>
        <CardDescription>This shows the sales data range for the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-6/12 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="hsl(210, 80%, 55%)" // Blue color
              strokeWidth={2}
              dot={{ fill: "hsl(210, 80%, 55%)" }} // Blue color
              activeDot={{ r: 8 }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}