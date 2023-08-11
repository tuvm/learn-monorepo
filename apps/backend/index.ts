import { UserListType } from '@shared/interface';

import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/user', (req: Request, res: Response) => {
  const userList: UserListType = [
    {
      username: 'admin',
      fullname: 'Admin',
    },
    {
      username: 'demo',
      fullname: 'Demo',
    },
  ];
  res.json(userList);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});