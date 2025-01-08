import type { GetStaticProps, NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faLinux, faSteam, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faFileZipper } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/header'
import Gallery from '../components/gallery'
import Download from '../components/download'
import Discord from '../components/discord'
import About from '../components/about'
import Trailer from '../components/trailer'
import Footer from '../components/footer'

const Home: NextPage<Props> = ({ release }) => {
  return (
    <div id="top" className="w-full bg-zinc-900 text-white">

      <Header/>

      <About className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"/>

      <Trailer className="w-full bg-black bg-cover mt-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:flex md:space-x-12">
        <Download className="w-full md:w-1/2" release={release} />
        <Discord className="w-full mt-4 md:mt-0 md:w-1/2 h-96 md:h-auto"/>
      </div>

      <Gallery className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"/>

      <Footer className="w-full md:max-w-7xl md:flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 space-y-4 md:space-y-0" />

    </div>
  )
}

type Props = {
  release: Release
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'token ' + process.env.GITHUB_ACCESS_TOKEN
  }

  const res = await fetch("https://api.github.com/repos/actionquake/distrib/releases/latest", {
    method: 'GET',
    headers
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  const assets = json.assets.map((asset: any) => {
    let platformRegex = new RegExp('(windows|mac|linux)')
    let platform = asset.name.match(platformRegex)?.[0] ?? null
    let platformIcon = faFileZipper
    if (platform === 'windows') {
      platformIcon = faWindows
    }
    if (platform === 'mac') {
      platformIcon = faApple
    }
    if (platform === 'linux') {
      platformIcon = faLinux
    }

    return ({
      id: asset.id,
      platform: platform,
      platformIcon: platformIcon,
      url: asset.browser_download_url,
      name: asset.name,
      content_type: asset.content_type,
      state: asset.state,
      size: asset.size,
      created_at: asset.created_at,
      updated_at: asset.updated_at
    } as Asset)
  })

  const release: Release = {
    id: json.id,
    url: json.html_url,
    version: json.tag_name,
    name: json.name,
    notes: json.body,
    draft: json.draft,
    prerelease: json.prerelease,
    assets: assets,
    created_at: json.created_at,
    published_at: json.published_at
  }

  return {
    props: { release: release },
    revalidate: 60
  }
}

export default Home
