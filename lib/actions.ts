import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { buildQuery } from "@/lib/buildQuery"

type Courses = {
  query:string,
  category: string,
  page: string,
}

export const getCourses = async(params: Courses)=> {
  const {query, category, page} = params

  try {
    const courses = await client.fetch(
      groq`${buildQuery({
        type: "courses",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category,
      }`
    );

    return courses;
  } catch (error) {
    console.log(error);
    
  }
}



export const getCourseDetails = async (courseId: string) => {

  try {
    const course = await client.fetch(
      groq`*[_type == 'courses' && slug.current  match '${courseId}']{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        "allImages":  images[].asset->url,
        views,
        slug,
        description,
        category,
      }`
    );

    return course[0];
  } catch (error) {
    console.log(error);
  }
};


export const getCoursesPlayList = async () => {
  try {
    const coursesPlayList = await client.fetch(
      groq`*[_type=="coursesPlaylist"]{
        title,
        _id,
        courses[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          slug,
          category,
        }
      }`
    );

    return coursesPlayList;
  } catch (error) {
    console.log(error);
  }
};