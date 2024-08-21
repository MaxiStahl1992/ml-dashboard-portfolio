import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../carousel';

const articles = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
  { id: 3, title: 'Article 3' },
  { id: 4, title: 'Article 4' },
  { id: 5, title: 'Article 5' },
];

export default function FavoriteArticlesCard() {
  return (
    <Card className="h-full rounded overflow-hidden">
      <CardHeader>
        <CardDescription>
          Read some of my favorite books, papers and articles
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Carousel className="w-[70%] max-w-smh-fit">
          <CarouselContent className="-ml-1">
            {articles.map((article) => (
              <CarouselItem
                key={article.id}
                className="pl-1">
                <div className="p-1">
                  <Card className="h-full rounded">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl md:text-xl lg:text-2xl font-semibold">
                        {article.title}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}
