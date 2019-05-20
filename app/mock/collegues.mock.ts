import { Collegue } from '../models/Collegue';

export const collegueMock = new Collegue(
  'a1',
  'Dundee',
  'Gali',
  'gali@gmail.com',
  new Date(1980, 1, 1),
  'http://vignette1.wikia.nocookie.net/p__/images/7/7f/Crocodile_Dundee.jpg/revision/latest?cb=20140729130017&path-prefix=protagonist'
);

export const cols = [
  new Collegue(
    'a1',
    'Dundee',
    'Gali',
    'gali@gmail.com',
    new Date(1980, 1, 1),
    'http://vignette1.wikia.nocookie.net/p__/images/7/7f/Crocodile_Dundee.jpg/revision/latest?cb=20140729130017&path-prefix=protagonist'
  ),
  new Collegue(
    'a2',
    'Gali',
    'ddd',
    'gali@gmail.com',
    new Date(1980, 1, 1),
    'https://i.ytimg.com/vi/UWHbbS7dres/hqdefault.jpg'
  )
];
