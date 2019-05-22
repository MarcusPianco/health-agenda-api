'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Auth')} Response */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use('App/Models/User')

class AuthController {
  async register ({ request }) {
    const data = request.only(['username', 'password', 'email'])

    const user = await User.create({ ...data })

    return user
  }

  async authenticate ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = AuthController
