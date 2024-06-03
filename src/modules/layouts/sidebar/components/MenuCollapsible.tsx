import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import { Text } from '@/components/ui/text'
import { pageList, type ToolsDataType } from '@/constants'

import useMenuCollapsibleController from '../controllers/useMenuCollapsibleController'

type Props = {
  tool: ToolsDataType
}

const MenuCollapsible = ({ tool }: Props) => {
  const { scope, handleChange } = useMenuCollapsibleController()
  const pathname = usePathname()

  return (
    <Collapsible className="mt-3">
      <CollapsibleTrigger
        className="group flex w-full items-center gap-2 px-3 text-sm font-semibold text-slate-400"
        onClick={handleChange}
      >
        <ChevronRight className="h-4 w-4 flex-none duration-200 group-data-[state=closed]:rotate-90 group-data-[state=open]:rotate-0" />
        <Text className="">{tool.title}</Text>
      </CollapsibleTrigger>
      <CollapsibleContent ref={scope} forceMount className="overflow-hidden">
        <Container className="flex gap-2 px-5">
          <Separator orientation="vertical" className="h-auto bg-slate-700" />
          <Container className="mt-2 w-full space-y-2 pb-3">
            {tool.content?.map((item, index) => (
              <Link
                href={pageList.tool({ tool: item }).href}
                data-active={pathname === `/${item.id}` ? 'true' : 'false'}
                className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-1 hover:bg-slate-700 data-[active=true]:bg-green-600/10 data-[active=true]:text-green-600"
                key={index}
              >
                <Icon icon={item.icon} className="h-5 w-5" />
                <Text>{item.title}</Text>
              </Link>
            ))}
          </Container>
        </Container>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default MenuCollapsible
