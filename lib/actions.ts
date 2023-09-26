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