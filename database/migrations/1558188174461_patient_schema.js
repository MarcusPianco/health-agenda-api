'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
/** @type {import('@adonisjs/framework/src/Route/Manager'} */

const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', table => {
      table.increments()
      table.string('name', 240).notNullable()
      table.string('lastName', 240).notNullable()
      table.date('birthDate').notNullable()
      table.string('kindUser', 50)
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
