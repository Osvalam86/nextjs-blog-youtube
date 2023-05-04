import Layout from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";

export default function blog({ data }) {
  return (
    <Layout title={"Mi blog"}>
      <h1>Blog page</h1>
      {data.map(({ id, title, body }) => (
        <div key={id} className={utilStyles.containerText}>
          <h3 className={utilStyles.headingXl}>
            <Link href={`/blog/${id}`}>
              {id} - {title}
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

// ? Generación de páginas estaticas
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
