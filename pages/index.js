import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne";
import ChildToParent from "./Parent2";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <Link
          href={{
            pathname: '/About',
            query: {name: "Sebastian"}
          }}
        >
          About
        </Link> 
        {/* This changes the URL when clicked to About Page*/}

        <ParentToChild/>
        <ChildToParent/>
      </main>
    </>
  );
}
