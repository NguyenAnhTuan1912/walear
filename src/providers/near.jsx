import React from "react";

import { Wallet } from "../wallets/near";
import { useWallet } from "../state";

import { GUESTBOOK_CONTRACT } from "../libs/guestbook";

const getNearContract = (networkId) => GUESTBOOK_CONTRACT[networkId];

export default function NearProvider({ children }) {
  const { setWallet, setSignedAccountId, networkId } = useWallet();

  React.useEffect(() => {
    const wallet = new Wallet({
      createAccessKeyFor: getNearContract(networkId),
      networkId: networkId,
    });
    wallet.startUp((accountId) => setSignedAccountId(accountId));

    setWallet(wallet);
  }, [networkId]);

  return <>{children}</>;
}
