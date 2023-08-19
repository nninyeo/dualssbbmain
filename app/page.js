import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (





    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          230817 by Min Yeo &nbsp;
          <code className={styles.code}>v0.1</code>
        </p>
        <div>


          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/min.project.svg"
          alt="Next.js Logo"
          width={260}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://wanted.dualssbb.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>원티드 지도검색 <span>-&gt;</span></h2>
          <h4> React + JAVA </h4>
          <p>몰래 사용한 비공식 wanted API서버에서 데이터 발췌 (계속 제작중..)</p>
        </a>

        <a
          href="https://sbbcffffs.tistory.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>개발블로그 <span>-&gt;</span></h2>
          <h4> Next.js + MongoDB </h4>
          <p>개발과 관련된 개인블로그, 다만 질떨어지는 내용을 검색되지 않게 하기위해 공사준비중</p>
        </a>

        <a
          href="https://blog.naver.com/nishitetsu/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
          <h2>
            개인블로그 <span>-&gt;</span>
          </h2>
          <h4>React + Nest.js + Postgres </h4>
          <p>일반 취미생활 블로그 (광고문자때문에 닫아둠)</p>
        </a>

        <a
          href="shopping.dualssbb.com"
          className={styles.card}
          target="_blank"
          rel="개인운영 쇼핑몰 (운영예정)"
        >
          <h2>
           쇼핑몰(예정)<span>-&gt;</span>
          </h2>
          <h4> Nuxt(vue3) + Nest.js + MariaDB </h4>
          <p>
            p-pack.co.kr -&gt; convert to (??) from cafe24
          </p>
        </a>

        <a
          href="shopping.dualssbb.com"
          className={styles.card}
          target="_blank"
          rel="개인운영 쇼핑몰 (운영예정)"
        >
          <h2>
           개인 FLEX서버 <span>-&gt;</span>
          </h2>
          <h4> ?? + NAS (예정) <span>-&gt;</span></h4>
          <p>
            개인 영상시청을 위한 프로젝트..
          </p>
        </a>


      </div>
    </main>




  )
}
