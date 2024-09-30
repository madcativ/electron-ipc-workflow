export default interface IIPCHandler{
    channel : string
    Action : () => (event : any, data : any) => any
    Connect : () => void
}