import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const SkinsApp = dynamic(() => import('../src/components/SkinsApp/SkinsApp'), { ssr: false });

const Home: NextPage = () => {
  return <SkinsApp />;
};

export default Home;
