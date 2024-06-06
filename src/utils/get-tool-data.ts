import type { ToolIds, ToolsDataType } from '@/constants'
import { tools } from '@/constants'

/**
 * Retrieves the tool data with the specified ID from the list of tools.
 *
 * @param {ToolIds} id - The ID of the tool or item to retrieve.
 * @return {ToolsDataType | undefined} The tool data with the specified ID, or undefined if not found.
 */
export const getToolData = (id: ToolIds): ToolsDataType | undefined => {
  for (const tool of tools) {
    if (tool.id === id) {
      return tool
    }
    if (tool.content) {
      for (const item of tool.content) {
        if (item.id === id) {
          return item
        }
      }
    }
  }
}
