import Head from "next/head";

import Header from "@/components/Header";
import aboutBgImg from "@/assets/images/about-bg.jpg";

export default function Page() {
  return (
    <>
      <Head>
        <title>Clean Blog - About</title>
        <meta
          name="description"
          content="Clean Blog - About"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <Header
          backgroundImg={aboutBgImg.src}
          heading="About"
          subheading="This is what I do."
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-lg-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur
                voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
                consectetur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque
                architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in
                officia voluptas voluptatibus, minus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae debitis nobis, quod sapiente
                qui voluptatum, placeat magni repudiandae accusantium fugit quas labore non rerum possimus, corrupti
                enim modi! Et.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
