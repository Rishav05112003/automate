import Home from "@/components/icons/home"
import Workflows from "@/components/icons/workflows"
import Settings from "@/components/icons/settings"
import Category from "@/components/icons/category"
import Payment from "@/components/icons/payment"
import Logs from "@/components/icons/clipboard"
import Templates from "@/components/icons/cloud_download"

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))



export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  { name: 'Templates', Component: Templates, href: '/templates' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]