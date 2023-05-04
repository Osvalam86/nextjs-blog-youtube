import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Layout.module.css";
import utilStyles from "@/styles/utils.module.css";

const name = "osva";

export default function Layout({ children, title, description, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
        <nav>
          <Link href="/">Inicio |</Link>
          <Link href="/blog">Blog |</Link>
          <Link href="/blog/primerPost">Mi primer Post |</Link>
          <Link href="/contact">Contact |</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

// ? Podemos declarar props default
Layout.defaultProps = {
  title: "Next.js | Mi sitio web",
  description: "Descripción de mi sitio web",
};
