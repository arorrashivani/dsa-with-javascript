# Practice - Music Player

In this problem, you need to implement the functionality of a music player using doubly linked list!

The functionality of a playlist queue needs to be implemented, i.e., adding a song to the queue, playing the next song, playing the previous song, switching to a song, etc.

You need to complete the following functions:

- addSong(int songId): Add the songId to the end of the list
- playNext(): Go to the next song in the list
- playPrev(): Go to the previous song in the list
- switchSong(int songId): Find in the list where this songId is present, go to that song and continue the playlist from there (In playlist 1<->2<->3<->4<->5 if the current song is 4 and function is called for 2, the current song is stopped and now order is 2->3->4->5)
- current(): Return the songId of the song currently playing

## Assumptions

- playNext function will not be called from the last song
- playPrev function will not be called from the first song
- The songId provided in switchSong function is always present in the list
- The addSong function will not be called for a songId which is already present in the list
- The current function will not be called when the list is empty.

Note: Until the next function is called, the current song will automatically be the first songId added in the list.

The problem input is query-based:

1 : An integer songId will be provided with which addSong(songId) will be called
2 : playNext() is called
3 : playPrev() is called
4 : An integer songId will be provided with which switchSong(songId) will be called
5 : current() is called and you need to return the songId for the current song playing

You only need to make changes in the functions mentioned. The input and calling the required functions are taken care of. Do not output anything or you may get WA verdict

#### Input Format

- The first line of input will contain a single integer N, denoting the number of queries.
- The next N lines contain a single or two integers depending on the type of query.

#### Output Format

Output a single integer songId on a new line for every time query type is 5.

#### Implementation

```
/*
class SongNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
*/

class Playlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.cur = null;
    }

    addSong(songId) {
        const newSong = new SongNode(songId);

        if(this.head === null) {
            this.head = newSong;
            this.tail = newSong;
            this.cur = newSong

            this.tail.next = this.head;

        } else {
            this.tail.next = newSong;

            this.tail = newSong;

            this.tail.next = this.head;
        }
    }

    nextSong() {
        if(this.cur) {
            this.cur = this.cur.next;
        }
    }

    prevSong() {
        if(this.cur === null || this.cur === this.head) {
            return;
        }

        let temp = this.head;

        while(temp !== null && temp.next !== this.cur) {
            temp = temp.prev;
        }

        if(temp !== null) {
            this.cur = temp;
        }
    }

    switchSong(songId) {
        let temp = this.head;

        do {
            if(temp.value === songId) {
                this.cur = temp;
                return;
            }
            temp = temp.next;
        } while(temp !== this.head);
    }

    current() {
        return this.cur !== null ? this.cur.value : -1;
    }
}
```
