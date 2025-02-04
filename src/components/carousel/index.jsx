
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useFetch from "../useFetch/indx"

export function CarouselSpacing() {
    const {data} = useFetch('https://fakestoreapi.com/products')
    console.log(data)

  return (
    <Carousel className=" w-3/4 lg:w-[900px] border-2 p-5 bg-gray-400 rounded-2xl ">
      <CarouselContent className="-ml-1 ">
        {data.map((img) => (
          <CarouselItem key={img.id} className="pl-1  md:basis-1/2 lg:basis-1/3">
            <div className="p-1 ">
              <Card className="border-0 rounded-2xl">
                <CardContent className="flex  aspect-square border-2   border-slate-700 rounded-2xl overflow-hidden items-center justify-center  w-full">
                   <img src={img.image} className=" object-contain  w-full h-full" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
