import { NextRequest } from 'next/server'
import { AppConfig } from '../../../../lib/AppConfig'

type ResponseData = {
  description: string
  external_url: string
  image: string
  name: string
  attributes: any[]
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ day: string; token: string }> }
): Promise<Response> {
  const { day, token } = await params

  const data: ResponseData = {
    "description": AppConfig.description,
    "external_url": AppConfig.siteUrl,
    "image": `${AppConfig.siteUrl}/images/nft/${day}.png`,
    "name": `Unlock Protocol Advent Calendar - Day ${day} - Token ${token}`,
    "attributes": []
  }

  return Response.json(data)
}

