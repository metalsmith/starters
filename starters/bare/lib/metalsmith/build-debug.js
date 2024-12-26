/**
 * Our own local plugin to log stuff
 */
export default function buildDebug(message) {
  return function buildDebug(files, metalsmith, next) {
    const debug = metalsmith.debug('build')
    const NODE_ENV = metalsmith.env('NODE_ENV')
    const isCLI = metalsmith.env('CLI') ? 'via metalsmith CLI' : ''
    const build = metalsmith.metadata().build
    debug(
      'Running %s (mode: %s). Processing %s files with environment %O',
      isCLI,
      NODE_ENV,
      Object.keys(files).length,
      { ...metalsmith.env() }
    )
    debug('Build info: %O', build)
    next()
  }
}
