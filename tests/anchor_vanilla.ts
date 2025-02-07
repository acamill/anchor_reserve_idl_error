import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { AnchorVanilla } from '../target/types/anchor_vanilla';

describe('anchor_vanilla', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.AnchorVanilla as Program<AnchorVanilla>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
