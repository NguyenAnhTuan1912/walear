import { create as createStore } from "zustand";
import { NETWORK_ID } from "../config";

// interface StoreState {
//   wallet: Wallet | undefined;
//   signedAccountId: string;
//   networkId: NetworkId;
//   setNetworkId: (networkId: NetworkId) => void;
//   setWallet: (wallet: Wallet) => void;
//   setSignedAccountId: (signedAccountId: string | undefined) => void;
// }

// Store to share wallet and signed account
export const useWallet = createStore((set) => ({
  wallet: undefined,
  signedAccountId: "",
  networkId: NETWORK_ID,
  setNetworkId: (networkId) => set({ networkId }),
  setWallet: (wallet) => {
    set((state) => {
      if (state.wallet) return state;
      return { ...state, wallet };
    });
  },
  setSignedAccountId: (signedAccountId) => {
    return set({ signedAccountId });
  },
}));

// type NearProviderProps = {
//   children: React.ReactNode;
// };
