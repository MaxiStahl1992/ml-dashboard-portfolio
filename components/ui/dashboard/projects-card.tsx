import { Project } from '@/app/lib/definitions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { HomeIcon } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    name: 'Image Classification',
    description: 'Classify images into categories',
    language: 'Python',
    model: 'ResNet',
    problem: 'Computer Vision',
    githubLink: 'https://www.github.com',
    exampleLink: 'https://www.google.com',
  },
  {
    id: '2',
    name: 'Chatbot',
    description: 'Develop Chatbot with specific use case',
    language: 'Python',
    model: 'GPT-4o',
    problem: 'Natural Language Processing',
    githubLink: 'https://www.github.com',
    exampleLink: 'https://www.google.com',
  },
  {
    id: '3',
    name: 'Stock Market Predictions',
    description: 'Predicts overall Stock Market development',
    language: 'Python',
    model: 'LSTM',
    problem: 'Time Series Prediction',
    githubLink: 'https://www.github.com',
    exampleLink: 'https://www.google.com',
  },
  {
    id: '4',
    name: 'Audio Enhancement',
    description: 'Restores dameged audio files',
    language: 'Python',
    model: 'WaveNet',
    problem: 'Audio Processing',
    githubLink: 'https://www.github.com',
    exampleLink: 'https://www.google.com',
  },
];

export default function ProjectsCard() {
  return (
    <Card className="h-full rounded flex flex-col">
      <CardHeader>
        <CardTitle>My Projects in ML</CardTitle>
        <CardDescription>
          These are projects I developed either at work, at university or just
          by myself to learn something new.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex grow overflow-hidden">
        <Table className="flex-1">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Links</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell className="flex flex-row gap-2 justify-center items-center">
                  <a href={project.githubLink} target='_blank' rel="noopener noreferrer">
                    <img
                      src="/github-mark-white.png"
                      alt="Github Icon"
                      height={20}
                      width={20}
                    />
                  </a>
                  <a href={project.exampleLink} target='_blank' rel="noopener noreferrer">
                    <HomeIcon size={20} />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
