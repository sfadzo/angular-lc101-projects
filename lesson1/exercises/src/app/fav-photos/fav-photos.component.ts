import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Rad Pics';
  image1 = 'https://www.dropbox.com/s/0ixszef9spr7yh8/gfB0bV3GVqQ4XVeBVwNrjph9DNh4UzQFUzdB2xOvALa8H0PbG1sMGR4ybBq9ziDqD2Wgep-4gNGUrvcO4vzyOyahpFH60leip7ijcYYXxs7n6KXiVZE5%3Dw1600-1001046246.png?dl=1';
  image2 = 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_480x.progressive.jpg?v=1573618694';
  image3 = 'https://m.media-amazon.com/images/M/MV5BMTcxNDM3OTMzOV5BMl5BanBnXkFtZTcwODYxMDIyNw@@._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}