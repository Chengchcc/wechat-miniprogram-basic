export enum LOG_LEVEL {
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4
}

interface ILogger {
  log(type: string, ...args: any[]): void;
}

export class Logger implements ILogger {
  log(type: string, ...args: any[]) {
    console.log(`[[===${type.toUpperCase()}===]]`, ...args)
  }
}

let _logger: ILogger = new Logger()
const isProduction = process.env.NODE_ENV === 'production';

let _logLevel: LOG_LEVEL = isProduction ? LOG_LEVEL.DEBUG : LOG_LEVEL.ERROR

export function init(level: LOG_LEVEL = _logLevel, logger?: ILogger) {
  _logLevel = level
  _logger = logger || new Logger()
}

export function debug(...args: any[]) {
  if (_logLevel <= LOG_LEVEL.DEBUG) {
    _logger.log('DEBUG', ...args)
  }
}

export function info(...args: any[]) {
  if (_logLevel <= LOG_LEVEL.INFO) {
    _logger.log('INFO', ...args)
  }
}

export function warn(...args: any[]) {
  if (_logLevel <= LOG_LEVEL.WARN) {
    _logger.log('WARN', ...args)
  }
}

export function error(...args: any[]) {
  if (_logLevel <= LOG_LEVEL.ERROR) {
    _logger.log('ERROR', ...args)
  }
}
