import { useLocation, Link } from 'react-router-dom';

import { BackButton } from 'components/BackBtn/BackBtn';
import s from './Header.module.scss';
import { Filter } from 'components/Filter/Filter';

export const Header = () => {
  const location = useLocation();

  const showBackButton = location.pathname !== '/';

  return (
    <header className={s.header}>
      {showBackButton && <BackButton />}
      <Link to="/" className={s.appNameLink}>
        <span className={s.appName}>Amazon tables</span>
      </Link>
      <Filter />
    </header>
  );
};
