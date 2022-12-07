const { PrismaClient, Care, PetSize, PetType } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
  //USER SEED
  const hashedSally = bcrypt.hashSync('ragdoll', 8);
  const sally = await prisma.User.upsert({
    where: { username: 'sallyskellington' },
    update: {},
    create: {
      id: 1,
      username: 'sallyskellington',
      password: hashedSally,
      firstName: 'Sally',
      location: 11103,
      careStatus: Care.OFFERING,
      bio: 'Loves animals and cooking new recipes',
    },
  });

  const hashedPippin = bcrypt.hashSync('pippin', 8);
  const pippin = await prisma.User.upsert({
    where: { username: 'pippin' },
    update: {},
    create: {
      id: 2,
      username: 'pippin',
      password: hashedPippin,
      location: 11215,
      careStatus: Care.OFFERING,
      bio: "I'm an avid hiker and I love to spend time at the ocean",
    },
  });

  const hashedDavid = bcrypt.hashSync('davidbowie', 8);
  const david = await prisma.User.upsert({
    where: { username: 'davidbowie' },
    update: {},
    create: {
      id: 3,
      username: 'davidbowie',
      password: hashedDavid,
      location: 11238,
      careStatus: Care.OFFERING,
      bio: 'I enjoy singing and dancing for friends, and dressing like an absolute boss',
    },
  });

  const hashedMoira = bcrypt.hashSync('moirarose', 8);
  const moira = await prisma.User.upsert({
    where: { username: 'moirarose' },
    update: {},
    create: {
      id: 4,
      username: 'moirarose',
      password: hashedMoira,
      firstName: 'Moira',
      lastName: 'Rose',
      location: 10016,
      careStatus: Care.SEEKING,
      bio: 'I have a large wig collection that you can take in with the dog as long as you promise to not touch any of them',
    },
  });

  //PET SEED
  const bebe = await prisma.Pet.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
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
