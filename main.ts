import { AptosClient } from 'aptos';

async function main() {
    const client = new AptosClient('https://fullnode.mainnet.aptoslabs.com/v1');
    const supply = await client.view({
        function: "0x1::coin::supply",
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: []
    }, "224262811");
    console.log(supply);
}

main();
