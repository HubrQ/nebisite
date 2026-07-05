import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Album {
  band: string;
  title: string;
  genre: string;
  link: string;
  year: string;
}

@Component({
  selector: 'app-album-randomizer',
  imports: [CommonModule],
  templateUrl: './album-randomizer.html',
  styleUrl: './album-randomizer.css',
})

export class AlbumRandomizer implements OnInit {

  albums: Album[] = [];
  currentAlbum?: Album;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  console.log('INIT');

  this.http.get<Album[]>('/albums.json')
    .subscribe({
      next: (data) => {
        console.log('LOADED:', data);

        this.albums = data;
        this.randomizer()
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('FAILED TO LOAD JSON:', err);
      }
      
    }
  );
}
  randomizer()
  {
    if (this.albums.length === 0) return;
    
    
    const index = Math.floor(Math.random() * this.albums.length);
    this.currentAlbum = this.albums[index];
  console.log('ASSIGNED', this.currentAlbum);
    

  }
getEmbedUrl(link: string): SafeResourceUrl | null {

  // YouTube playlist
  if (link.includes('youtube.com') && link.includes('list=')) {
    const listId = this.extractQueryParam(link, 'list');
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/videoseries?list=${listId}`
    );
  }

  // Spotify album
  if (link.includes('/album/')) {
    const id = this.extractSpotifyId(link);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/album/${id}`
    );
  }

  // Spotify playlist
  if (link.includes('/playlist/')) {
    const id = this.extractSpotifyId(link);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/playlist/${id}`
    );
  }
    if (link.includes('bandcamp.com')) {

    // IMPORTANT: this assumes you already stored the EMBED URL in JSON
    // NOT the normal bandcamp album page link

    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  if (!link) return null;
  return null;
  
}
extractYouTubeId(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/
  );
  return match ? match[1] : '';
}
extractQueryParam(url: string, param: string): string {
  const match = url.match(new RegExp(`[?&]${param}=([^&]+)`));
  return match ? match[1] : '';
}
extractSpotifyId(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 1].split('?')[0];
}


}
