
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Element
const player = $('.player');
const playlist = $('.playlist');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');

// App
const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
            name: "Mang tiền về cho mẹ",
            singer: "Đen Vâu",
            path: "./assets/audio/mang_tien_ve_cho_me.mp3",
            image: "./assets/img/cd-img/den_vau.jpg"
        },
        {
            name: "Reality",
            singer: "Lost Frequencies",
            path: "./assets/audio/Reality.mp3",
            image: "./assets/img/cd-img/reality.jpg"
        },
        {
            name: "Despacito",
            singer: "Luis Fonsi, Daddy Yankee",
            path: "./assets/audio/despacito.mp3",
            image: "./assets/img/cd-img/despacito.jpg"
        },
        {
            name: "Bài này chill phết",
            singer: "Đen Vâu",
            path: "./assets/audio/bai_nay_chill_phet.mp3",
            image: "./assets/img/cd-img/bai_nay_chill_phet.jpg"
        },
        {
            name: "How you like that",
            singer: "Blackpink",
            path: "./assets/audio/how_you_like_that.mp3",
            image: "./assets/img/cd-img/how_you_like_that.jpg"
        },
        {
            name: "Buồn làm chi em ơi",
            singer: "Hoài Lâm",
            path: "./assets/audio/buon_lam_chi_em_oi.mp3",
            image: "./assets/img/cd-img/hoai_lam.jpg"
        },
        {
            name: "Bước qua nhau",
            singer: "Vũ",
            path: "./assets/audio/buoc_qua_nhau.mp3",
            image: "./assets/img/cd-img/vu.jpg"
        },
        {
            name: "Bước qua mùa cô đơn",
            singer: "Vũ",
            path: "./assets/audio/buoc_qua_mua_co_don.mp3",
            image: "./assets/img/cd-img/vu.jpg"
        },
        {
            name: "Một triệu like",
            singer: "Đen Vâu",
            path: "./assets/audio/mot_trieu_like.mp3",
            image: "./assets/img/cd-img/den_vau.jpg"
        },
        {
            name: "Có chắc yêu là đây",
            singer: "Sơn Tùng MTP",
            path: "./assets/audio/co_chac_yeu_la_day.mp3",
            image: "./assets/img/cd-img/son_tung.jpg"
        },
        {
            name: "At my worst",
            singer: "Pink Sweat$",
            path: "./assets/audio/at_my_worst.mp3",
            image: "./assets/img/cd-img/pink_sweat.jpg"
        },
    ],

    // Define properties
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    // Render song
    render: function(){
        const songHtmlELe = this.songs.map(song => {
            return `
                <div class="song ">
                    <div class="thumb" style="background-image: url('${song.image}')"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="title">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = songHtmlELe.join('');
    },

    // Handle events
    handleEvents: function(){
        const _this = this;
        
        // play song
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
        }

        // Listen event of audio
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing');
        }
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing');
        }

    },
    
    // Load current song
    loadCurrentSong: function(){
        heading.innerText = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    start: function(){
        
        // Define properties
        this.defineProperties();

        // Handle events
        this.handleEvents();
        
        // Load current song
        this.loadCurrentSong();

        // Render song 
        this.render();
    }
}

// Start app
app.start()