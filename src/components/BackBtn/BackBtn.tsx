import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import s from './BackBtn.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button className={s.backBtn} type="button" variant="dark" onClick={() => navigate(-1)}>
      Go back
    </Button>
  );
};
