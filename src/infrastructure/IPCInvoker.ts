import IIPCInvoker from "./interfaces/IIPCInvoker"

export default class IPCInvoker implements IIPCInvoker{
    channel : string
    actionName : string

    constructor(channel : string, actionName : string){
        this.channel = channel
        this.actionName = actionName
    }

    Action() : (...args: any[]) => any{
        return () => {}
    }
}