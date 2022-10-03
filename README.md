# Evilist of Ricks

There are many different versions of Rick on the show Rick and Morty. We are here to determine who is the most evil Rick of them all... according to the Internet.

### Made with

- TypeScript
- Next.js
- Tailwind CSS
- Prisma (mysql)
- tRPC

### Deployed with

- Vercel
- PlanetScale

## How to Run

1. Clone the repository to your local machine using `git clone https://github.com/dylanullrich/evilist-of-ricks.git`.
2. Run `npm install` to install all dependencies in your new `evilist-of-ricks` directory.
3. Set up a `mysql` database on a website like [PlanetScale](https://planetscale.com/) or host locally.
4. When the database is established, copy the database url in a `.env` file. There is a sample in this repository that can be viewed [here](./.env.sample).
5. Once a database is connected, you can seed the database by running `npm run seed` which will run the `fillDb.ts` script.
6. Run `npm run dev` and visit `http://localhost:3000` to view the app.

### Inspired by

- [TheoBr's roundest-mon](https://github.com/TheoBr/roundest-mon)
