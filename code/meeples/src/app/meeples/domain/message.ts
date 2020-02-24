export enum MessageType {
  ACTION,
  LOG,
  SELECT,
  MOVE
} 

export enum TargetType {
    NONE, MEEPLE, CELLULE, 
}

export class Message {
    constructor(
        public messageType: MessageType,
        // public name: string, 
        // public targetType: TargetType, 
        public target: any) {}
  }