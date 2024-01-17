import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button type="button" variant="outline-dark" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};
