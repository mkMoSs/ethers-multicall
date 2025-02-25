import {Contract} from '@ethersproject/contracts';
import {Provider} from '@ethersproject/providers';

import {Abi} from './abi';
import {multicallAbi} from './abi/multicall';
import {ContractCall} from './types';

export async function all<T extends any[] = any[]>(
    calls: ContractCall[],
    multicallAddress: string,
    provider: Provider,
): Promise<T> {
    const multicall = new Contract(multicallAddress, multicallAbi, provider);
    const callRequests = calls.map(call => {
        const callData = Abi.encode(call.name, call.inputs, call.params);
        return {
            target: call.contract.address,
            callData,
        };
    });
    const response = await multicall.aggregate(callRequests);
    const callCount = calls.length;
    const callResult = [] as T;
    for (let i = 0; i < callCount; i++) {
        const outputs = calls[i].outputs;
        const returnData = response.returnData[i];
        const params = Abi.decode(outputs, returnData);
        const result = outputs.length === 1 ? params[0] : params;
        callResult.push(result);
    }
    return callResult;
}

export async function tryAll<T extends any[] = any[]>(
    calls: ContractCall[],
    multicallAddress: string,
    provider: Provider,
): Promise<T> {
    const multicall = new Contract(multicallAddress, multicallAbi, provider);
    const callRequests = calls.map(call => {
        const callData = Abi.encode(call.name, call.inputs, call.params);
        return {
            target: call.contract.address,
            callData,
        };
    });
    const response = await multicall.tryAggregate(false, callRequests);
    const callCount = calls.length;
    const callResult = [] as T;
    for (let i = 0; i < callCount; i++) {
        const outputs = calls[i].outputs;
        if (response[i].success) {
            const returnData = response[i].returnData;
            const params = Abi.decode(outputs, returnData);
            const result = outputs.length === 1 ? params[0] : params;
            callResult.push({success: true, result});
        } else {
            callResult.push({success: false});
        }
    }
    return callResult;
}
