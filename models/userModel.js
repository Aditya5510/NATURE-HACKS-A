const prisma = require("../config/prisma");

const UserModel = {
  async findAll() {
    return prisma.user.findMany();
  },

  async findById(id) {
    return prisma.user.findUnique({
      where: { id },
      include: { orders: true },
    });
  },

  async create(data) {
    return prisma.user.create({
      data,
    });
  },

  async update(id, data) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  async delete(id) {
    return prisma.user.delete({
      where: { id },
    });
  },
};

module.exports = UserModel;
