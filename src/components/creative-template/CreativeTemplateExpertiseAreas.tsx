import { useCv } from '../../providers/cvContext';
import { Badge } from '../badge/Badge';

export const CreativeTemplateExpertiseAreas = () => {
  const { skills } = useCv();

  return (
    <div className="expertise-areas p-8">
      <div className="w-full">
        <span className="expertise-areas__title text-2xl">Areas of expertise</span>
      </div>

      <div className="w-full mt-4">
        {skills.map((skill) => (
          <Badge text={skill} key={skill} className="mr-2 mb-2" />
        ))}
      </div>
    </div>
  );
};
