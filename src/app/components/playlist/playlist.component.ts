import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListCartComponent } from '../list-cart/list-cart.component';
import { DialogComponent } from '../dialog/dialog.component';
import { PlaylistService } from '../shared/playlist.service';

export interface Playlist {
  name: string;
  totalDuration: number;
  totalSongs: number;
  description: string;
  songs: Song[];
}

export interface Song {
  title: string;
  artist: string;
  duration: number;
}
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {


  constructor(public dialog: MatDialog,public service: PlaylistService) { }

  ngOnInit(): void {
  }
  


  playlists: Playlist[] = [
    {
      name: 'Kopikustik',
      totalDuration: 5,
      totalSongs: 2,
      description: 'More than a coffee, this is all of your favorite accoustic songs.',
      songs: [
        {
          title: 'Cigarettes of ours',
          artist: 'Ardhito Pramono',
          duration: 3
        },
        {
          title: 'Walking Back Home',
          artist: 'Vira Talisa',
          duration: 2
        },
      ]
    },
    {
      name: 'Anime Hits',
      totalDuration: 13,
      totalSongs: 3,
      description: 'Listen to your favorite Anime songs, all in one playlist.',
      songs: [
        {
          title: 'Renai Circulation',
          artist: 'Kana Hanazawa',
          duration: 4
        },
        {
          title: 'Platinum Disco',
          artist: 'Tsukihi Phoenix',
          duration: 4
        },
        {
          title: 'Silhouette',
          artist: 'KANA-BOON',
          duration: 5
        },
      ]
    }
  ];
  name:string
  description:string;
  songs:[];
  addPlaylistDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(DialogComponent, {

      width: '900px',
      data: {
        operation: 'create',
        name : this.name,
        description: this.description,
        songs: this.songs
        
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.name = result.name;
        this.description=result.description;
        this.songs=result.songs;
        this.addPlaylist();
        }
       
      
    });
  }
  editPlaylist(playlist: Playlist, index: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '900px',
      data: {
        songs:this.songs,
        
        operation: 'edit',
        playlistData: playlist,
        position: index
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         this.playlists[index] = playlist;
        this.songs= result.songs;
        this.playlists[index].name = result.name;
        this.playlists[index].description = result.description;

       
   
        this.playlists[index].songs = result.songs;

      }
    });
  }


  deletePlaylist(i)
  {
    this.playlists.splice(i, 1);
  }
  totalDurationCalculation(a:[])
    {

    }
  addPlaylist()
  {
    let totalDurations = 0;
    this.songs.forEach((song: Song) => {
      totalDurations += song.duration;
    });
    this.playlists.push({
      name: this.name,
      totalDuration: totalDurations,
      totalSongs: this.songs.length,
      description: this.description,
      songs: this.songs}
    );
  
  }
  updatePlaylists(playlist: Playlist, index ): void {

   
  }
}
