import { Experience } from '../../types';
import './styles.scss';

interface Props {
  experience: Experience;
}

export const WorkExperience = ({ experience }: Props) => {
  const { position, company, startDate, endDate, location, achievements } = experience;

  return (
    <div className="work-experience mt-5">
      <div className="work-experience__position text-2xl font-bold">{position}</div>

      <div className="work-experience__company text-2xl">{company}</div>

      <div className="work-experience__dates-location">
        <span className="work-experience__dates">
          {startDate} - {endDate}
        </span>
        {location ?? <span className="work-experience__location">{location}</span>}
      </div>

      <div className="work-experience__achievements">
        <div className="work-experience__achievements__title text-sm">Achievements</div>

        <ul className="work-experience__achievements__list pl-4">
          {achievements.map((achievement) => (
            <li className="work-experience__achievements__item" key={achievement}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
