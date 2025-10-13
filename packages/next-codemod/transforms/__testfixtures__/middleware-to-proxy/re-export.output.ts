// Re-export middleware from another file
export { proxy } from './other-middleware'

// Also re-export with alias
export { proxy as handler } from './another-file'

// Import and re-export
import { middleware as mw } from './third-file'
export { mw as middleware }