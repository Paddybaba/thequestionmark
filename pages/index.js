import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GiTeacher } from "react-icons/gi";
import { FcReadingEbook } from "react-icons/fc";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Link from "next/link";
import { useEffect } from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Question Mark</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="image-box">
        <Image src="/questionmark.png" height="100%" width="100%"></Image>
      </div>
      <main className={styles.main}>
        <h1>The Question Mark </h1>
        <Link href="/login/loginStudent">
          <div
            className="box-login text-center"
            onClick={() => {
              document.documentElement.requestFullscreen();
            }}
          >
            <FcReadingEbook />
            <p style={{ lineHeight: "0", margin: "0 10px" }}>Student</p>
          </div>
        </Link>
        <Link href="/login/loginTeacher">
          <div
            className="box-login text-center"
            onClick={() => {
              document.documentElement.requestFullscreen();
            }}
          >
            <GiTeacher />
            <p style={{ lineHeight: "0", margin: "0 10px" }}>Teacher</p>
          </div>
        </Link>
      </main>
    </div>
  );
}
