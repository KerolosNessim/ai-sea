import Image from 'next/image';
import { RiUserLine } from 'react-icons/ri';
import CustomLink from './custom-link';
import { useTranslations } from 'next-intl';

const AboutSection = () => {
  const  t  = useTranslations('about');
  return (
    <section className="container flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-10 ">
      {/* content */}
      <div className="space-y-3 relative max-lg:text-center">
        <Image
          src="/blue-shadow.svg"
          alt="blue-shadow"
          width={150}
          height={150}
          className="absolute top-0 start-0"
        />
        <p className="font-semibold text-xs">{t('subtitle')}</p>
        <h2 className="font-bold text-2xl">{t('title')}</h2>
        <p className="text-gris">
          {t('description')}
        </p>
        <CustomLink
          href=""
          label={t('btn')}
          icon={<RiUserLine />}
          isRotate
          className="w-fit max-lg:mx-auto "
        />
      </div>

      <Image
        src="/hero.png"
        alt="blue-shadow"
        width={500}
        height={500}
        className="rounded-4xl lg:w-1/2 w-full  lg:h-[60vh] h-[40vh] object-cover"
      />
    </section>
  );
}

export default AboutSection;