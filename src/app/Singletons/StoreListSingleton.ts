import { __classPrivateFieldGet } from "tslib";
import { JSONRESPONSE } from "../DTOs/JSONRESPONSE";

export class StoreListSingleton
{
    public static value : JSONRESPONSE[];
    
    private static _Instance : StoreListSingleton;

    private static _List : JSONRESPONSE[];
    
    private constructor()
    {

    }

    public static get GetSingleton()
    {
           if (this._Instance === undefined || this._Instance === null)
           {
                this._Instance = new StoreListSingleton();
           }       
           return this._Instance;    
    }

    public Add(JSON : JSONRESPONSE)
    {
       StoreListSingleton._List.push(JSON);
    }

    public Clear()
    {
        StoreListSingleton._List = [] as JSONRESPONSE[];
    }


}