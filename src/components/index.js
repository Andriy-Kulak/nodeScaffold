import oiCalculator from './oiRating/controllers/oiCalculator';
import oiInfo from './oiRating/controllers/oiInfo';
import ocpCalculator from './ocpRating/controllers/ocpCalculator';
import ocpInfo from './ocpRating/controllers/ocpInfo';

export const calcRating = (req, res) => {
  console.log(req.params.type);

  switch (req.params.type) {
    case 'oi':
      return res.json(oiCalculator());
    case 'ocp':
      return res.json(ocpCalculator());
    default:
      return res.body(
        { results: false, value: 'invalid paremeters passed through' });
  }
};

export const infoRating = (req, res) => {
  console.log(req.params.type);

  switch (req.params.type) {
    case 'oi':
      return res.json(oiInfo());
    case 'ocp':
      return res.json(ocpInfo());
    default:
      return res.body(
        { results: false, value: 'invalid paremeters passed through' });
  }
};
