import { getCourseDetails } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 200;

export default async function Home({ params }: { params: { courseid: string } }) {
  const {courseid} = params;
  const courseDetails = await getCourseDetails(courseid);

  return (
    <main className="paddings w-full flex flex-col gap-16">
      <h2 className="text-center underline text-4xl  pb-16 pt-20 text-white">
        {courseDetails.title}
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <Image
          src={courseDetails.image}
          className="rounded-lg"
          width={500}
          height={500}
          alt="course Image"
        />
        <div className="flex flex-col gap-10">
          <h3>
            {courseDetails.title} is {courseDetails.category} course for you
          </h3>
          <p>{courseDetails.description}</p>
          <p>Downloads : {courseDetails.views}</p>
          <Link className="border-l-pink" href={courseDetails.downloadLink}>
            click to download
          </Link>
        </div>
      </div>
      <div>
        <h4>Other Images</h4>
        
      </div>
    </main>
  );
}
