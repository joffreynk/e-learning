import CourseCard from "@/components/CourseCard";
import Filters from '@/components/Filters';
import Heading from "@/components/Heading";
import SearchForm from '@/components/searchForm';
import { getCourses, getCoursesPlayList } from '@/lib/actions';

type Props = {
  searchParams: {
    [key: string]: string | undefined
  }
}

export const revalidate = 200

export default async function Home({searchParams}: Props) {

  const courses = await getCourses({
    category: searchParams?.category || "",
    query: searchParams?.query || "",
    page: "1",
  });

  const coursesPlayList = await getCoursesPlayList();

  return (
    <main className="flex-center paddings w-full flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center">
            Learn with Jofrreynk e-learning and collaborate internationally
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      {(searchParams?.category || searchParams?.query) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Heading
            title="Courses"
            category={searchParams?.category || ""}
            query={searchParams?.query || ''}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {courses.length > 0 ? (
              courses.map((course: any) => (
                <CourseCard
                  key={course._id}
                  downloadLink={course.downloadLink}
                  slug={course.slug.current}
                  title={course.title}
                  downloadNumber={course.views}
                  image={course.image}
                />
              ))
            ) : (
              <p className="body-base-regular text-white-400">
                No course Found
              </p>
            )}
          </div>
        </section>
      )}

      {coursesPlayList.map((plyaList: any) => (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <h1 className="heading3 self-start text-white-800">
            {plyaList.title}
          </h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {plyaList.courses.length > 0 ? (
              plyaList.courses.map((course: any) => (
                <CourseCard
                  key={course._id}
                  downloadLink={course.downloadLink}
                  slug={course.slug.current}
                  title={course.title}
                  downloadNumber={course.views}
                  image={course.image}
                />
              ))
            ) : (
              <p className="body-base-regular text-white-400">
                No course Found
              </p>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
