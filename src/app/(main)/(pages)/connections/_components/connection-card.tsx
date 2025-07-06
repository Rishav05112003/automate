import { ConnectionTypes } from '@/lib/types'
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  description: string
  callback?: () => void
  connected: {} & any
}

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  connected,
}: Props) => {
  return (
    <Card className="flex w-full bg-background items-start p-4 justify-between">
      <CardHeader className="p-0 flex flex-col gap-3">
        <div className="flex flex-col items-start gap-3">
          <Image
            src={icon}
            alt={title}
            height={40}
            width={40}
            className="object-contain"
          />
          <div className="flex flex-1 w-full flex-col">
            <CardTitle className="text-base font-semibold text-white">{title}</CardTitle>
            <CardDescription className="text-sm whitespace-nowrap text-white/60">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      {/* <div className="flex flex-col items-center gap-2 p-4">
        {connected[type] ? (
          <div className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-white">
            Connected
          </div>
        ) : (
          <Link
            href={
              title == 'Discord'
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title == 'Notion'
                ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                : title == 'Slack'
                ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                : '#'
            }
            className=" rounded-lg bg-primary p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        )}
      </div> */}
    </Card>
  )
}

export default ConnectionCard