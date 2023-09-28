type Props = {
  title: string,
  query: string,
  category: string,
}

const Heading = ({title, query, category}: Props) => {
  if(query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        {" "}
        Search results for "{query}"  in{"  "}
        <span className="capitalize underline">{category}</span> category
      </h1>
    );
  }
   if (query) {
     return (
       <h1 className="heading3 self-start text-white-800">
         Search results for "{query}"
       </h1>
     );
   }

     if (category) {
       return (
         <h1 className="heading3 self-start text-white-800">
           Search results for
           <span className="capitalize">{category}</span> category
         </h1>
       );
     }
  return <h1 className="heading3 self-start text-white-800"> </h1>;
}

export default Heading