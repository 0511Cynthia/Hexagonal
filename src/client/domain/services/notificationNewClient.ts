import { Client } from "../entity/client";

export default interface INotificationNewClient{
    sendNotification(client: Client):Promise<boolean>;
}