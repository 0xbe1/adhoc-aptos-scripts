import { createClient } from '@thalalabs/surf';
import { COIN_ABI } from './abi';

async function main() {
    const client = createClient({
        nodeUrl: 'https://fullnode.mainnet.aptoslabs.com/v1',
    });
    const [supply] = await client.useABI(COIN_ABI).view.supply({
        type_arguments: ['0x1::aptos_coin::AptosCoin'],
        arguments: []
    });
    console.log(supply);
}

main();