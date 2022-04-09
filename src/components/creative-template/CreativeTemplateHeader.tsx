import { useCv } from '../../providers/cvContext';

export const CreativeTemplateHeader = () => {
  const { name, surname, position, title, bio, image, email, phone, linkedin, city, country, whatsappUrl } = useCv();

  return (
    <div className="header">
      <div className="w-full flex p-8">
        <div className="w-10/12 pr-8 text-justify">
          <div className="header__name w-full text-5xl">
            {name} {surname}
          </div>

          <div className="w-full text-xl">
            <div className="header__position inline-block">{position}</div>
            <div className="header__title inline-block ml-3">{title}</div>
          </div>

          <div className="header__bio w-full mt-4">{bio}</div>
        </div>

        <div className="w-2/12">
          <div className="header__image">
            <img className="rounded-lg" src={image} alt={`${name} ${surname}`} />
          </div>
        </div>
      </div>

      <div className="header__footer">
        <div className="w-full flex pt-8 px-8 pb-3">
          <div className="w-6/12 item">
            <i className="fas fa-fw fa-envelope mr-2"></i>{' '}
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              {email}
            </a>
          </div>

          <div className="w-6/12 item">
            <i className="fas fa-fw fa-mobile mr-2"></i>{' '}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {phone}
            </a>
          </div>
        </div>

        <div className="w-full flex pb-8 px-8">
          <div className="w-6/12 item">
            <i className="fas fa-fw fa-globe mr-2"></i> {city}, {country}
          </div>

          <div className="w-6/12 item">
            <i className="fab fa-fw fa-linkedin-in mr-2"></i>{' '}
            <a href={linkedin} target="_blank" rel="noreferrer">
              {linkedin.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
