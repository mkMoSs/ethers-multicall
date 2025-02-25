import { Provider as EthersProvider } from '@ethersproject/abstract-provider';
import { ContractCall } from './types';
export declare class Provider {
    private _provider;
    private _multicallAddress;
    constructor(provider: EthersProvider, chainId?: number);
    init(): Promise<void>;
    getEthBalance(address: string): any;
    all<T extends any[] = any[]>(calls: ContractCall[]): Promise<T>;
    tryAll<T extends any[] = any[]>(calls: ContractCall[]): Promise<T>;
}
export declare function setMulticallAddress(chainId: number, address: string): void;
