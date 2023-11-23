import SanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

export const client = SanityClient({
  projectId: "f36qpv20",
  dataset: "production",
  apiVersion: "2023-11-22",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
