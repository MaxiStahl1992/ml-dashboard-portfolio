import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutMeCard() {
  return (
    <Card className="h-full overflow-hidden rounded">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          About Me
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardTitle>
        <CardDescription>Some infos about myself:</CardDescription>
      </CardHeader>
      <CardContent className="overflow-y-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full overflow-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Where do I work?</AccordionTrigger>
            <AccordionContent>
              Currently I work at a company called BayWa AG.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What do I do?</AccordionTrigger>
            <AccordionContent>
              I develop AI solutions for various business units. My projects range from computer vision to natural language processing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Whats my education?</AccordionTrigger>
            <AccordionContent>
              I have a bachelors in Business and Economics, then I pivoted to Computer Science and I am currently getting my masters in Applied AI.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Whats do I do for fun?</AccordionTrigger>
            <AccordionContent>
              I love to be outdoors with my dog, I love to read and I love to code.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Where do I live?</AccordionTrigger>
            <AccordionContent>
              I am currently living in Munich, Germany.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
