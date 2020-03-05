export enum MessageType {
  ACTION,
  LOG,
  SELECT,
  MOVE
} 

export enum TYPE_TARGET {
    NONE, MEEPLE, CELLULE, 
}

export class Message {
    constructor(
        public messageType: MessageType,
        // public name: string, 
        // public targetType: TYPE_TARGET, 
        public target: any) {}
  }