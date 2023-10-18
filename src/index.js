import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
    // const newUser = await db.user.create({
    //     data: {
    //         name: "Fabricio",
    //         email: "me@fabricioflores.se"
    //     }
    // })

    // console.log(newUser)

    const users = await db.user.findMany()
    console.log(users)
}

main()