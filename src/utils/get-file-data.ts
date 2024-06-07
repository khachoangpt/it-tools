import { promises as fs } from 'fs'

import { logger } from '@/configs/logger'

export const getFileData = async (filePath: string): Promise<string> => {
  try {
    const fileData = await fs.readFile(process.cwd() + filePath, 'utf-8')
    return fileData
  } catch (error) {
    logger.error(`Read file with path: ${filePath} error.`)
    return 'File Not Found'
  }
}
