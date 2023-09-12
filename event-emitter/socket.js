import EventEmitter from "events";
import {util} from 'util'
export function Socket(){
EventEmitter.call(this);
}
util.inherits(Socket,EventEmitter);

Socket.prototype.open=function(cb){

    setTimeout(()=>{

        //Open Completed
        cb("status:open");
        this.emit("status:open");
    },1000);
}
Socket.prototype.close=function(cb){

    setTimeout(()=>{

        //Close Completed
        cb("status:close")
    },1000);
}
Socket.prototype.listen=function(cb){
    setTimeout(()=>{
            cb("status:listening")
        //ListenCompleted
    },1000);
}
