import { getCourseDetails } from "@/lib/actions";

export const revalidate = 200;

export default async function Home({ params }: { params: { courseid: string } }) {
  const {courseid} = params;
  const courseDetails = await getCourseDetails(courseid);

  console.log("====================================");
  console.log(courseDetails);

  console.log("====================================");

  return <main className="flex-center paddings w-full flex-col"></main>;
}
