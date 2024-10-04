import { contextBridge } from "electron"
import IIPCAPI from "../domain/interfaces/IIPCAPI"
import IIPCHandler from "../domain/interfaces/IIPCHandler"
import IIPCInvoker from "../domain/interfaces/IIPCInvoker"

export default class IPCAPI implements IIPCAPI{
    name : string

    EnrollHandlers(handlers : Array<IIPCHandler>){
        handlers.forEach(handler => handler.Connect())
    }

    EnrollInvokers(invokers : Array<IIPCInvoker>){
        const apiMethods : Record<any, any> = {}

        invokers.forEach(invoker => {
            apiMethods[invoker.actionName] = invoker.Action()
        })

        contextBridge.exposeInMainWorld(this.name, apiMethods)
    }
}