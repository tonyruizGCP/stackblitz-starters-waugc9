import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.marathonpetroleum.com/Operations/Retail/Safety-Data-Sheets/">MPC SDS Search Engine!</a>
        </h1>
        <img src="data:image/png;base64,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" alt="Girl in a jacket" width="500" height="600"></img>


        <script src="https://cloud.google.com/ai/gen-app-builder/client"></script>

        <gen-search-widget
          configId="0c36bcac-3c2b-473f-a682-51ba1f892ba0"
          triggerId="searchWidgetTrigger">
        </gen-search-widget>

        <input placeholder="Search here" id="searchWidgetTrigger" />

     
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
