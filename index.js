const ethers = require('ethers')

const ensAbi = [
  'function resolver(bytes32 node) external view returns (address)',
]

const resolverAbi = [
  'function addr(bytes32 node) public view returns (address)',
]

const repoAbi = [
  'function getLatest() public view returns (uint16[3] semanticVersion, address contractAddress, bytes contentURI)',
]

async function main() {
  const appId =
    '0x0abcd104777321a82b010357f20887d61247493d89d2e987ff57bcecbde00e1e'
  console.log('appId', appId)
  const provider = new ethers.providers.InfuraProvider()
  const ens = new ethers.Contract(provider.network.ensAddress, ensAbi, provider)
  const resolverAddress = await ens.resolver(appId)
  const resolver = new ethers.Contract(resolverAddress, resolverAbi, provider)
  const repoAddress = await resolver.addr(appId)
  const repo = new ethers.Contract(repoAddress, repoAbi, provider)
  const version = await repo.getLatest()
  const contentUriString = ethers.utils.toUtf8String(version.contentURI)
  const [_, cid] = contentUriString.split(':')

  const url = `https://ipfs.io/ipfs/${cid}/manifest.json`
  console.log('contentUri', contentUriString)
  const content = await ethers.utils.fetchJson(url)
  console.log(content)
}

main()
  .then(() => {
    console.log('end of script')
  })
  .catch((error) => {
    console.error(error)
  })
