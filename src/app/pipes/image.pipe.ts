import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(imageUrl: string, defaultImage: string): any {
    return (imageUrl && imageUrl.length > 0) ? imageUrl : defaultImage;
  }

}
