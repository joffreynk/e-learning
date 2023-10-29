import { getCourseDetails } from "@/lib/actions";

export const revalidate = 200;

export default async function Home({ params }: { params: { courseid: string } }) {
  const {courseid} = params;
  const courseDetails = await getCourseDetails(courseid);

  return (
    <main className="flex-center  paddings w-full flex-col">
      <h2 className=" pt-20 text-white">{courseDetails.title}</h2>
      <p>{courseDetails.description}</p>
    </main>
  );
}
