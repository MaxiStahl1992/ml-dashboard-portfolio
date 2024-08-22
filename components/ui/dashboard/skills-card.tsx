'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

// const chartData = [
//   { skill: 'Python', value: 80, fill: 'var(--color-python)' },
//   { skill: 'TypeScript', value: 90, fill: 'var(--color-type_script)' },
//   { skill: 'Computer Vision', value: 85, fill: 'var(--color-computer_vision)' },
//   { skill: 'NLP', value: 55, fill: 'var(--color-nlp)' },
//   { skill: 'Dog Dad', value: 95, fill: 'var(--color-dog_dad)' },
// ];

// const chartConfig = {
//   value: {
//     label: 'Skill Level',
//   },
//   python: {
//     label: 'Python',
//     color: '#2563eb',
//   },
//   type_script: {
//     label: 'TypeScript',
//     color: '#2563eb',
//   },
//   computer_vision: {
//     label: 'Computer Vision',
//     color: 'hsl(var(--chart-3))',
//   },
//   nlp: {
//     label: 'NLP',
//     color: 'hsl(var(--chart-4))',
//   },
//   dog_dad: {
//     label: 'Dog Dag',
//     color: 'hsl(var(--chart-5))',
//   },
// } satisfies ChartConfig;

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

export default function SkillsCard() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full">
      <BarChart
        accessibilityLayer
        data={chartData}>
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          radius={4}
        />
        <Bar
          dataKey="mobile"
          fill="var(--color-mobile)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
