import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PlaylistService } from '../shared/playlist.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song, Playlist, PlaylistComponent } from '../playlist/playlist.component';
import { DialogData } from 'src/data/dialog-data';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  description:string;
  songs: FormArray;
  constructor(public service: PlaylistService,public dialogRef: MatDialogRef<DialogComponent>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: {operation: string, playlistData: Playlist, position: number}  ) 
   { 
   }
   
   form : FormGroup ;
  playListData: Playlist;

  songsform() :FormArray { 
    return this.form.get('songs') as FormArray ;
  }

  ngOnInit(): void {

   this.form = new FormGroup(
      {
        name:new FormControl('', Validators.required),
        description:new FormControl('',Validators.required),
        title:new FormControl('',Validators.required),
        artist:new FormControl('',Validators.required),
        duration:new FormControl(0,[Validators.required , Validators.min(0)]),
        songs:  this.formBuilder.array([ this.createSong() ])
  
  
      }
    )
    if (this.data.operation === 'edit') {
      this.form = this.formBuilder.group({
        name: [this.data.playlistData.name, Validators.required],
        description: [this.data.playlistData.description, Validators.required],
        songs: this.formBuilder.array(
          this.data.playlistData.songs.map(song => this.formBuilder.group({
            title: [song.title, Validators.required],
            artist: [song.artist, Validators.required],
            duration: [song.duration, Validators.compose([Validators.required, Validators.min(0)])],
          }))
        ),
      })
    
    }
      }
    
  
  close() {
    this.dialogRef.close();
}

createSong(): FormGroup {
  return this.formBuilder.group({
    title: [null, Validators.required],
    artist: [null, Validators.required],
    duration: [null, Validators.compose([Validators.required, Validators.min(0)])],
  });
}
addSong(): void {

  this.songsform().push(this.createSong());
}
removeSong(index: number): void {
  if (this.songsform().controls.length > 1) {
  this.songsform().removeAt(index);
  }
}

  onSubmit(){
    this.playListData = this.form.getRawValue();

    const formValues = this.form.value;
    let totalSongs = formValues.songs.length;
    let totalDuration = 0;
    formValues.songs.forEach((song: Song) => {
      totalDuration += song.duration;
    });
    if (true) {
      const finalPlaylist: Playlist = {
        name: formValues.name,
        description: formValues.description,
        totalDuration,
        totalSongs,
        songs: formValues.songs,
      };
      return finalPlaylist; 
    }
    return null;

  }  
  }


