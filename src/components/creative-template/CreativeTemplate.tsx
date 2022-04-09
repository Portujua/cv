import { CreativeTemplateExperiences } from './CreativeTemplateExperiences';
import { CreativeTemplateExpertiseAreas } from './CreativeTemplateExpertiseAreas';
import { CreativeTemplateHeader } from './CreativeTemplateHeader';
import './styles.scss';

export const CreativeTemplate = () => {
  return (
    <div className="creative-template">
      <CreativeTemplateHeader />
      <CreativeTemplateExpertiseAreas />
      <CreativeTemplateExperiences />
    </div>
  );
};
