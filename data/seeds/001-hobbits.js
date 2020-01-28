exports.seed = async (knex) => {
  // Deletes ALL existing entries and resets ids
  await knex("hobbits").truncate();
  await knex("users").truncate();
}
