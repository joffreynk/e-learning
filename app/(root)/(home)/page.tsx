import CourseCard from "@/components/CourseCard";
import Filters from '@/components/Filters';
import SearchForm from '@/components/searchForm';
import { getCourses } from '@/lib/actions';

export default async function Home() {

  const courses = await getCourses({category: '', query: '', page: '1'});
  
 
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

      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        Header
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {courses.length > 0 ? (
            courses.map((course: any) => <CourseCard key={course.slug} />)
          ) : (
            <p className="body-base-regular text-white-400">No course Found</p>
          )}
        </div>
      </section>
    </main>
  );
}
