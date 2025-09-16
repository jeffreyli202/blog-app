export default (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title:       { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING },
    published:   { type: Sequelize.BOOLEAN, defaultValue: false },
  });
  return Tutorial;
};