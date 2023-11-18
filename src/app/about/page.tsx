import IndexAbout from './components/indexAbout'

export default function About(){


  return (
    <>
      <div className='w-screen h-[300vh] dark:bg-black bg-[#c1c1c1]'>
        <div className="bg-gradient-to-b dark:from-[#000030] dark:to-[#000000] from-[#c1deee] to-[#c1c1c1] w-screen h-quaseFull absolute"></div>
        <IndexAbout/>
      </div>
    </>
  );
};