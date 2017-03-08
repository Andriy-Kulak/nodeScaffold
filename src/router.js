import { calcRating, infoRating } from './components';

export default function (app) {
  // POST for calculating the various ratings
  app.post('/api/calcRating/:type', calcRating);

  // GET for getting more info on expecations for request & response params
  app.get('/api/calcRating/:type', infoRating);
}