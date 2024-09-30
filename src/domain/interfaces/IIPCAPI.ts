import IIPCHandler from "./IIPCHandler"
import IIPCInvoker from "./IIPCInvoker"

export default interface IIPCAPI{
    name : string
    EnrollHandlers : (handlers : Array<IIPCHandler>) => void
    EnrollInvokers : (invokers : Array<IIPCInvoker>) => void
}