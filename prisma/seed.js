const { PrismaClient, Care, PetSize, PetType } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  //USER SEED
  const sally = await prisma.User.create({
    data: {
      id: 1,
      username: 'sallyskellington',
      password: 'ragdoll',
      location: 11103,
      careStatus: Care.OFFERING,
      bio: 'Loves animals and cooking new recipes',
    },
  });

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

  const moira = await prisma.User.create({
    data: {
      id: 4,
      username: 'moirarose',
      password: 'moirarose',
      location: 10016,
      careStatus: Care.SEEKING,
      bio: 'I have a large wig collection that you can take in with the dog as long as you promise to not touch any of them',
    },
  });

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
    console.log("✨🐤 Database has been seeded! 🦆✨")
    await prisma.$disconnect();
  });
