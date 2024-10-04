import { ipcMain } from "electron"
import IIPCHandler from "../domain/interfaces/IIPCHandler"

export default class IPCHandler implements IIPCHandler{
    channel : string

    constructor(channel : string){
        this.channel = channel
    }

    Action() : (event : any, data: any) => any{
        return () => {}
    }

    Connect(){
        ipcMain.handle(this.channel, this.Action())
    }
}