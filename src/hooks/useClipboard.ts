import { toast } from 'sonner'

const useClipboard = () => {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  return { copyToClipboard }
}

export default useClipboard
