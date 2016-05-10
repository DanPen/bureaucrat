import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Article} from './article';
import {ARTICLES} from './articles-mock';


@Injectable()
export class ArticleService {
  private API_URL = 'http://localhost:3000/api';

  constructor(private http: Http) {}

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getArticle(id: number) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.API_URL+'/article/'+id, options)
                  .map(response => {
                    var articleObj = response.json();
                    var article = new Article(articleObj.data.id, articleObj.data.title, articleObj.data.content, new Date(articleObj.data.publishDate));
                    return article;
                  })
                  .catch(this.handleError);
  }

  getArticles() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.API_URL+'/articles', options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  createArticle(): Observable<Article>  {
    let body = JSON.stringify({});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.API_URL+'/article', body, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  updateArticle(article: Article) {
    let body = JSON.stringify({
      action: 'save',
      article: article
    });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(this.API_URL+'/article/'+article.id, body, options)
                  .map(this.extractData)
                  .catch(this.handleError);

  }

  publishArticle(article: Article, publish: boolean) {
    let body = JSON.stringify({
      action: 'publish',
      publish: publish,
      id: article.id
    });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(this.API_URL+'/article/'+article.id, body, options)
                  .map(response => {
                    return new Date(response.json().publishDate)
                  })
                  .catch(this.handleError);
  }
}
