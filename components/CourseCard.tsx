type Props = {
title: string,
downloadLink: string,
downloadNumber: number,
image: string,
slug: string,
}

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


const CourseCard = ({ title, downloadLink, downloadNumber, image, slug} : Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/course/${slug}`}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              alt={title}
              width={384}
              height={440}
              className="h-full rounded-md object-cover"
            />
          </div>
          <CardTitle className="paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        </CardHeader>
      </Link>
        <CardContent className="flex-between mt-4 p-0">
         <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" width={20} height={20} alt="download" />
          {downloadNumber}
         </div>
         <Link href={downloadLink} className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
          Download now
          <Image src="/arrow-blue.svg" width={13} height={15} alt="arrow-blue" />
         </Link>
        </CardContent>
    </Card>
  );
};

export default CourseCard;