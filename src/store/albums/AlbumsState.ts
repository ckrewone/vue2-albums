import { Album } from './Album'
import { Photo } from './Photo';

export interface AlbumsState {
    albums: Album[];
    photos: Photo[];
}