import { CreativeTemplate } from '../creative-template/CreativeTemplate';
import './styles.scss';

export const Home = () => {
  return (
    <section style={{ backgroundColor: '#e5e5e5' }} className="container mx-auto">
      <CreativeTemplate />
    </section>
  );
};
