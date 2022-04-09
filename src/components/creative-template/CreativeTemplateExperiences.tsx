import { useCv } from '../../providers/cvContext';
import { WorkExperience } from '../work-experience/WorkExperience';

export const CreativeTemplateExperiences = () => {
  const { experiences } = useCv();

  return (
    <div className="working-experiences px-8 py-2">
      <div className="w-full mb-3">
        <span className="working-experiences__header text-2xl">Professional experience</span>
      </div>

      {experiences.map((experience) => (
        <WorkExperience experience={experience} key={experience.company} />
      ))}
    </div>
  );
};
