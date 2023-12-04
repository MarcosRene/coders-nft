import '../styles/globals.css'
import Progress from 'nextjs-progressbar';

import Layout from './_layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Progress
        color="#FF2748"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
    </Layout>
  )
}

