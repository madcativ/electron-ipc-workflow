export default interface IIPCInvoker{
    channel : string
    actionName : string
    Action : () => (...args : any[]) => any
}