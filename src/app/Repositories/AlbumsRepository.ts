import { HttpClient } from "@angular/common/http";
import { JSONRESPONSE } from "../DTOs/JSONRESPONSE";

export class DependencyResolver
{
    private value! : JSONRESPONSE[]; 
    private _httpclient : HttpClient;
    private constructor(public httpClient : HttpClient)
    {
        this._httpclient = httpClient;
    }

    public GetValues()
    {
        let response! : JSONRESPONSE[];
        let test = this._httpclient.get<any>("https://jsonplaceholder.typicode.com/photos");
        test.subscribe(
            _httpclient =>{
          this.value = response;
        }
        
      );
    }

    public ReturnValue()
    {
        return this.value;
    }
}

export class AlbumRepository
{
    private _Instance : AlbumRepository = new AlbumRepository;

    private JSONPOSTS! : JSONRESPONSE[];
    
    private constructor()
    {
        
    }

    public get GetSingleton()
    {
           if (this._Instance === undefined || this._Instance === null)
           {
                this._Instance = new AlbumRepository();
           }       
           return this._Instance;    
    }

    public Add(JSON : JSONRESPONSE[])
    {
        this.JSONPOSTS = JSON;
    }

}