# Prisma with postgresql
Quickstart into prisma using docker and postgres

We are using `pnpm` instead of `npm`.
For installing pnpm run `npm i -g pnpm`

1. Rename `.env.example` to `.env`
2. Install dependencies `pnpm install`
3. Install docker if you dont have it already (this is for creating our database locally)
4. Make sure docker desktop is running if you are in windows
5. Run `pnpm start:dev` for development
6. Run `pnpm start` for production