import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink, faPlay, faStar, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AnnouncementBanner } from './(components)/banner';

const images = [
  {
    src: '/sogawasaki/sogawa-saki-1.jpeg',
    link: 'https://x.com/sogawa_saki/status/1822460153935073549',
  },
  {
    src: '/sogawasaki/sogawa-saki-2.jpeg',
    link: 'https://x.com/sogawa_saki/status/1804478476537540634',
  },
  {
    src: '/sogawasaki/sogawa-saki-3.jpeg',
    link: 'https://x.com/sogawa_saki/status/1804265807884750933',
  },
  {
    src: '/sogawasaki/sogawa-saki-4.jpeg',
    link: 'https://x.com/sogawa_saki/status/1797778961654747269',
  },
  {
    src: '/sogawasaki/sogawa-saki-5.jpeg',
    link: 'https://x.com/sogawa_saki/status/1787493379431190865',
  },
  {
    src: '/sogawasaki/sogawa-saki-6.jpeg',
    link: 'https://x.com/sogawa_saki/status/1838732163543634276',
  },
];

export default function Home() {
  return (
    <div>
      <div className="md:flex items-center justify-center gap-4 md:mt-4 px-5 md:px-0">
        <a
          href="https://sp.stu48.com/feature/sogawa_saki_fs"
          target="_blank"
          rel="noreferrer"
          className="h-[120px] w-[120px] cursor-pointer overflow-hidden rounded-full hidden md:inline-block"
        >
          <Image
            loading="eager"
            alt="avatar"
            src="/11th-sogawa-saki.jpeg"
            width="120"
            height="120"
            className="object-cover object-left-top"
          />
        </a>
        <div className="mt-6">
          <div className="text-xs md:text-sm font-medium text-slate-500">STU48 3rd gen</div>
          <h1 className="mb-4 mt-1 text-3xl md:text-4xl font-bold text-slate-800">Sogawa Saki</h1>
          <p className="text-sm md:text-md text-slate-700 leading-6">
            STU48 曽川咲葵（そがわさき）と申します ！<br />
            山口県出身/19歳
          </p>
        </div>
      </div>

      <section className="max-w-screen-lg mx-auto px-5 pt-4 md:pt-16">
        <AnnouncementBanner />
      </section>

      <div className="max-w-screen-lg mx-auto px-5 pt-10 md:pt-20">
        <div className="flex items-center justify-between w-full my-8 px-4">
          <span className="h-[1px] flex-1 bg-slate-200" />
          <h2 className="text-center text-base md:text-lg font-medium px-8 tracking-[0.2em]">LINKS</h2>
          <span className="h-[1px] flex-1 bg-slate-200" />
        </div>
        <div className="flex justify-center flex-wrap gap-4 flex-start mt-12">
          <a
            href="https://sogawasaki.official-fc.site"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-white overflow-hidden transition-colors ease-in-out border inline-block"
          >
            <div className="px-8 py-6">
              <div className="flex items-center justify-center gap-4">
                <FontAwesomeIcon icon={faLink} size="lg" className="text-slate-700 w-8 h-8" />
              </div>
            </div>
          </a>

          <a
            href="https://x.com/sogawa_saki"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-white overflow-hidden transition-colors ease-in-out border inline-block"
          >
            <div className="px-8 py-6">
              <div className="flex items-center justify-center gap-4">
                <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-slate-700 w-8 h-8" />
              </div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/sogawa_saki/"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-white transition-colors ease-in-out border inline-block relative"
          >
            <div className="absolute -top-2 -right-2 bg-rose-500 text-rose-100 text-xs px-2 py-1 rounded-full">New</div>
            <div className="px-8 py-6">
              <div className="flex items-center justify-center gap-4">
                <FontAwesomeIcon icon={faInstagram} size="lg" className="text-slate-700 w-8 h-8" />
              </div>
            </div>
          </a>

          <a
            href="https://www.youtube.com/watch?v=Fn41Spu0kKk"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-white overflow-hidden transition-colors ease-in-out border inline-block"
          >
            <div className="px-8 py-6">
              <div className="flex items-center justify-center gap-4">
                <FontAwesomeIcon icon={faYoutube} size="lg" className="text-slate-700 w-8 h-8" />
              </div>
            </div>
          </a>

          <a
            href="https://www.showroom-live.com/r/48_SOGAWA_SAKI"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-white overflow-hidden transition-colors ease-in-out border inline-block"
          >
            <div className="px-8 py-6">
              <div className="flex items-center justify-center gap-4">
                <FontAwesomeIcon icon={faPlay} size="lg" className="text-slate-700 w-8 h-8" />
              </div>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@stu48.official/video/7432225498102516999?is_from_webapp=1&sender_device=pc&web_id=7416683383919429127"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-white overflow-hidden transition-colors ease-in-out border inline-block"
          >
            <div className="px-8 py-6">
              <div className="flex items-center justify-center gap-4">
                <FontAwesomeIcon icon={faTiktok} size="lg" className="text-slate-700 w-8 h-8" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <section className="max-w-screen-lg mx-auto px-5 pt-10 md:pt-16">
        <div className="flex items-center justify-between w-full my-8 px-4">
          <span className="h-[1px] flex-1 bg-slate-200" />
          <h2 className="text-center text-base md:text-lg font-medium px-8 tracking-[0.2em]">PHOTOS</h2>
          <span className="h-[1px] flex-1 bg-slate-200" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full mt-12 pb-4">
          {images.map((image, index) => (
            <a
              key={image.link}
              href={image.link}
              target="_blank"
              rel="noreferrer"
              className="h-[350px] bg-slate-200 rounded-lg"
            >
              <figure className="h-full w-full">
                <Image
                  loading="eager"
                  alt="sogawa saki"
                  src={image.src}
                  width="520"
                  height="520"
                  className="object-cover w-full h-full object-top"
                />
              </figure>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
