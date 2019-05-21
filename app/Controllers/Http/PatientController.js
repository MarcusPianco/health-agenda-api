'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

/**
 * Resourceful controller for interacting with patients
 */

const Patient = use('App/Models/Patient')

class PatientController {
  /**
   * Show a list of all patients.
   * GET patients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const patients = await Patient.all()

    return patients
  }

  /**
   * Render a form to be used for creating a new patient.
   * GET patients/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async store ({ request }) {
    const data = request.only(['content'])
    const patient = await Patient.create({ ...data })

    return patient
  }

  /**
   * Display a single patient.
   * GET patients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const patient = await Patient.findByOrFail(params.id)

    return patient
  }

  /**
   * Update patient details.
   * PUT or PATCH patients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const patient = await Patient.findOrFail(params.id)
    const patientUpdated = request.only(['content'])
    patient.merge(patientUpdated)
    return patient
  }

  /**
   * Delete a patient with id.
   * DELETE patients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const patient = await Patient.findOrFail(params.id)

    await patient.destroy()
  }
}

module.exports = PatientController
