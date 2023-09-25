import Filters from '@/components/Filters';
import SearchForm from '@/components/searchForm';
import { Button } from '@/components/ui/button'

export default function Home() {
 
  return (
    <main className="flex-center paddings w-full flex-col">
      <section className="nav-padding w-full">
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center'>Learn with Jofrreynk e-learning and collaborate internationally</h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
    </main>
  );
}
