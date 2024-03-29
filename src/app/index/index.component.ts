import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
// 展示首页内容需要的Model数据
private carouselItems = [];      //轮播广告商品
private newArrivalItems = [];   //新品上市商品
private recommendedItems = [];   //首页推荐
private topSaleItems = [];       //热销单品
@ViewChild('indexSlides',{static:true})
private indexSlides      //首页轮播广告视图子元素

  constructor(private http:HttpClient,private api:ApiService) { }

  ngOnInit() {
    // 组件初始化完成后异步请求首页的数据
    this.http.get(this.api.indexApi).subscribe((res:any)=>{
      // 异步请求获得首页的数据
      // console.log(res)
      this.carouselItems = res.carouselItems;
      this.newArrivalItems = res.newArrivalItems;
      this.recommendedItems = res.recommendedItems;
      this.topSaleItems = res.topSaleItems;
      console.log(this.carouselItems);
      console.log(this.newArrivalItems);
      console.log(this.recommendedItems);
      console.log(this.topSaleItems);


      // 首页轮播组件开始自动播放
      this.indexSlides.startAutoplay();
    });
  }

}
