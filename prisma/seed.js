const { PrismaClient, Care, PetSize, PetType } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
  //USER SEED
  const sally = await prisma.User.create({
    data: {
      id: 1,
      username: 'sallyskellington',
      password: 'ragdoll',
      firstName: 'Sally',
      location: 11103,
      careStatus: Care.OFFERING,
      bio: 'Loves animals and cooking new recipes',
    },
  });
  sally.password = bcrypt.hashSync(sally.password, 8);

  const pippin = await prisma.User.create({
    data: {
      id: 2,
      username: 'pippin',
      password: 'pippin',
      location: 11215,
      careStatus: Care.OFFERING,
      bio: "I'm an avid hiker and I love to spend time at the ocean",
    },
  });
  pippin.password = bcrypt.hashSync(pippin.password, 8);

  const david = await prisma.User.create({
    data: {
      id: 3,
      username: 'davidbowie',
      password: 'davidbowie',
      location: 11238,
      careStatus: Care.OFFERING,
      bio: 'I enjoy singing and dancing for friends, and dressing like an absolute boss',
    },
  });
  david.password = bcrypt.hashSync(david.password, 8);

  const moira = await prisma.User.create({
    data: {
      id: 4,
      username: 'moirarose',
      password: 'moirarose',
      firstName: 'Moira',
      lastName: 'Rose',
      location: 10016,
      careStatus: Care.SEEKING,
      bio: 'I have a large wig collection that you can take in with the dog as long as you promise to not touch any of them',
    },
  });
  moira.password = bcrypt.hashSync(moira.password, 8);

  //PET SEED
  const bebe = await prisma.Pet.create({
    data: {
      ownerId: moira.id,
      type: PetType.DOG,
      size: PetSize.SMALL,
      bio: 'Friendly, loves to chew shoes',
      medicalInfo: 'Healthy',
      careInstance: {
        create: [
          {
            userId: david.id,
            startDate: new Date(),
            endDate: new Date(),
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('✨🐤 Database has been seeded! 🦆✨');
    await prisma.$disconnect();
  });
