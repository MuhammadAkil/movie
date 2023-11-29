import { Component } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.scss']
})
export class BrowseMoviesComponent {
  movies: any[] = [];
  title: any;
  bgImg: any;
  p: number = 1;
  loading = false;
  search: any;
  selectedGenre = 'all';
  selectedRating = '0';
  selectedYear = '0';
  selectedLanguage = 'all';
  selectedQuality = 'all';
  selectedOrderBy = 'latest';


  // genre: any;
  // rating: any;
  // quality: any;
  // year: any;
  // language: any;
  // order_by: any;

  qualities = [
    { name: 'All', value: 'all' },
    { name: '480p', value: '480p' },
    { name: '720p', value: '720p' },
    { name: '1080p', value: '1080p' },
    { name: '2160p', value: '2160p' },
    { name: '3D', value: '3D' }
  ];
  genres = [
    { name: 'All', value: 'all' },
    { name: 'Action', value: 'action' },
    { name: 'Adventure', value: 'adventure' },
    { name: 'Animation', value: 'animation' },
    { name: 'Biography', value: 'biography' },
    { name: 'Comedy', value: 'comedy' },
    { name: 'Crime', value: 'crime' },
    { name: 'Documentary', value: 'documentary' },
    { name: 'Drama', value: 'drama' },
    { name: 'Family', value: 'family' },
    { name: 'Fantasy', value: 'fantasy' },
    { name: 'Film-Noir', value: 'film-noir' },
    { name: 'Game-Show', value: 'game-show' },
    { name: 'History', value: 'history' },
    { name: 'Horror', value: 'horror' },
    { name: 'Music', value: 'music' },
    { name: 'Musical', value: 'musical' },
    { name: 'Mystery', value: 'mystery' },
    { name: 'News', value: 'news' },
    { name: 'Reality-TV', value: 'reality-tv' },
    { name: 'Romance', value: 'romance' },
    { name: 'Sci-Fi', value: 'sci-fi' },
    { name: 'Sport', value: 'sport' },
    { name: 'Talk-Show', value: 'talk-show' },
    { name: 'Thriller', value: 'thriller' },
    { name: 'War', value: 'war' },
    { name: 'Western', value: 'western' }
  ];
  ratings = [
    { name: 'All', value: '0' },
    { name: '9+', value: '9' },
    { name: '8+', value: '8' },
    { name: '7+', value: '7' },
    { name: '6+', value: '6' },
    { name: '5+', value: '5' },
    { name: '4+', value: '4' },
    { name: '3+', value: '3' },
    { name: '2+', value: '2' },
    { name: '1+', value: '1' }
  ];
  years = [
    { name: 'All', value: '0' },
    { name: '2023', value: '2023' },
    { name: '2022', value: '2022' },
    { name: '2020-now', value: '2020-2023' },
    { name: '2010-now', value: '2010-2023' },
    { name: '2010-2019', value: '2010-2019' },
    { name: '2000-2009', value: '2000-2009' },
    { name: '1990-1999', value: '1990-1999' },
    { name: '1980-1989', value: '1980-1989' },
    { name: '1970-1979', value: '1970-1979' },
    { name: '1950-1969', value: '1950-1969' },
    { name: '1900-1949', value: '1900-1949' }
  ];
  languages = [
    { name: 'English', value: 'en' },
    { name: 'Foreign', value: 'foreign' },
    { name: 'All', value: 'all' },
    { name: 'French (2681)', value: 'fr' },
    { name: 'Japanese (2385)', value: 'ja' },
    { name: 'Spanish (1448)', value: 'es' },
    { name: 'Italian (1276)', value: 'it' },
    { name: 'German (1041)', value: 'de' },
    { name: 'Chinese (902)', value: 'zh' },
    { name: 'Korean (818)', value: 'ko' },
    { name: 'Cantonese (728)', value: 'cn' },
    { name: 'Hindi (597)', value: 'hi' },
    { name: 'Russian (357)', value: 'ru' },
    { name: 'Swedish (344)', value: 'sv' },
    { name: 'Portuguese (342)', value: 'pt' },
    { name: 'Romanian (309)', value: 'ro' },
    { name: 'Polish (293)', value: 'pl' },
    { name: 'Thai (211)', value: 'th' },
    { name: 'Dutch (199)', value: 'nl' },
    { name: 'Turkish (199)', value: 'tr' },
    { name: 'Danish (194)', value: 'da' },
    { name: 'Norwegian (131)', value: 'no' },
    { name: 'Arabic (129)', value: 'ar' },
    { name: 'Tamil (125)', value: 'ta' },
    { name: 'Indonesian (124)', value: 'id' },
    { name: 'Vietnamese (117)', value: 'vi' },
    { name: 'Hungarian (112)', value: 'hu' },
    { name: 'Finnish (107)', value: 'fi' },
    { name: 'Telugu (102)', value: 'te' },
    { name: 'Czech (95)', value: 'cs' },
    { name: 'Persian (78)', value: 'fa' },
    { name: 'Tagalog (76)', value: 'tl' },
    { name: 'Ukrainian (53)', value: 'uk' },
    { name: 'Estonian (50)', value: 'et' },
    { name: 'Greek (47)', value: 'el' },
    { name: 'Hebrew (45)', value: 'he' },
    { name: 'Malay (29)', value: 'ms' },
    { name: 'Malayalam (29)', value: 'ml' },
    { name: 'Catalan (24)', value: 'ca' },
    { name: 'Bangla (21)', value: 'bn' },
    { name: 'Urdu (21)', value: 'ur' },
    { name: 'Icelandic (19)', value: 'is' },
    { name: 'Slovak (17)', value: 'sk' },
    { name: 'Serbian (17)', value: 'sr' },
    { name: 'Kannada (16)', value: 'kn' },
    { name: 'Latvian (14)', value: 'lv' },
    { name: 'Punjabi (12)', value: 'pa' },
    { name: 'Marathi (10)', value: 'mr' },
    { name: 'Lithuanian (9)', value: 'lt' },
    { name: 'xx (8)', value: 'xx' },
    { name: 'Georgian (8)', value: 'ka' },
    { name: 'Bulgarian (8)', value: 'bg' },
    { name: 'Galician (7)', value: 'gl' },
    { name: 'Serbo-Croatian (7)', value: 'sh' },
    { name: 'Croatian (7)', value: 'hr' },
    { name: 'Basque (6)', value: 'eu' },
    { name: 'Macedonian (6)', value: 'mk' },
    { name: 'Tibetan (6)', value: 'bo' },
    { name: 'Wolof (6)', value: 'wo' },
    { name: 'Afrikaans (5)', value: 'af' },
    { name: 'Irish (5)', value: 'ga' },
    { name: 'Amharic (5)', value: 'am' },
    { name: 'Kurdish (5)', value: 'ku' },
    { name: 'Albanian (5)', value: 'sq' },
    { name: 'Yoruba (5)', value: 'yo' },
    { name: 'Cantonese (5)', value: 'yue' },
    { name: 'Swahili (4)', value: 'sw' },
    { name: 'Slovenian (4)', value: 'sl' },
    { name: 'Bosnian (3)', value: 'bs' },
    { name: 'Khmer (3)', value: 'km' },
    { name: 'Pashto (3)', value: 'ps' },
    { name: 'Southern Sotho (3)', value: 'st' },
    { name: 'Armenian (3)', value: 'hy' },
    { name: 'Zulu (3)', value: 'zu' },
    { name: 'Kazakh (3)', value: 'kk' },
    { name: 'cmn (3)', value: 'cmn' },
    { name: 'Gujarati (3)', value: 'gu' },
    { name: 'Latin (2)', value: 'la' },
    { name: 'Mongolian (2)', value: 'mn' },
    { name: 'Norwegian Bokmål (2)', value: 'nb' },
    { name: 'Yiddish (2)', value: 'yi' },
    { name: 'Maori (2)', value: 'mi' },
    { name: 'Akan (2)', value: 'ak' },
    { name: 'Haitian Creole (2)', value: 'ht' },
    { name: 'Maltese (2)', value: 'mt' },
    { name: 'Burmese (2)', value: 'my' },
    { name: 'Nepali (2)', value: 'ne' },
    { name: 'Bambara (2)', value: 'bm' },
    { name: 'Abkhazian (1)', value: 'ab' },
    { name: 'Ossetic (1)', value: 'os' },
    { name: 'Afar (1)', value: 'aa' },
    { name: 'Luxembourgish (1)', value: 'lb' },
    { name: 'Kyrgyz (1)', value: 'ky' },
    { name: 'Azerbaijani (1)', value: 'az' },
    { name: 'Somali (1)', value: 'so' },
    { name: 'Inuktitut (1)', value: 'iu' },
    { name: 'Ganda (1)', value: 'lg' },
    { name: 'Belarusian (1)', value: 'be' },
    { name: 'Igbo (1)', value: 'ig' },
    { name: 'Welsh (1)', value: 'cy' },
    { name: 'No linguistic content (1)', value: 'zxx' },
    { name: 'Filipino (1)', value: 'fil' },
    { name: 'Xhosa (1)', value: 'xh' },
    { name: 'Twi (1)', value: 'tw' },
    { name: 'Kinyarwanda (1)', value: 'rw' },
    { name: 'Odia (1)', value: 'or' },
    { name: 'American Sign Language (1)', value: 'ase' },
    { name: 'Min Nan Chinese (1)', value: 'nan' },
    { name: 'ber (1)', value: 'ber' },
    { name: 'qag (1)', value: 'qag' },
    { name: 'Swiss German (1)', value: 'gsw' },
    { name: 'Lingala (1)', value: 'ln' },
    { name: 'Iban (1)', value: 'iba' },
    { name: 'Cree (1)', value: 'cr' },
    { name: 'Javanese (1)', value: 'jv' },
    { name: 'Tswana (1)', value: 'tn' },
    { name: 'qab (1)', value: 'qab' },
    { name: 'Lao (1)', value: 'lo' },
    { name: 'Romany (1)', value: 'rom' },
    { name: 'Dzongkha (1)', value: 'dz' },
    { name: 'Romanian (1)', value: 'mo' },
    { name: 'Sanskrit (1)', value: 'sa' },
    { name: 'ukl (1)', value: 'ukl' }
  ];
  orderBy = [
    { name: 'Latest', value: 'latest' },
    { name: 'Oldest', value: 'oldest' },
    { name: 'Featured', value: 'featured' },
    { name: 'Seeds', value: 'seeds' },
    { name: 'Peers', value: 'peers' },
    { name: 'Year', value: 'year' },
    { name: 'IMDb Rating', value: 'rating' },
    { name: 'YTS Likes', value: 'likes' },
    { name: 'RT Audience', value: 'rt_audience' },
    { name: 'Alphabetical', value: 'alphabetical' },
    { name: 'Downloads', value: 'downloads' }
  ];



  constructor(public movie: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    let url = `list_movies.json?quality=${this.selectedQuality}&genre=${this.selectedGenre}&minimum_rating=${this.selectedRating}&order_by=${this.selectedOrderBy}&query_term=${this.search || ''}`;
    // let url = `list_movies.json?quality=${this.selectedQuality}&genre=${this.selectedGenre}&rating=${this.selectedRating}&year=${this.selectedYear}&language=${this.languages}`//&year=${this.selectedYear}&language=${this.languages}&order_by=${this.}&query_term=${this.search || ''}
    this.loading = true;
    this.movie.get(url).subscribe({
      next: (res) => {
        console.log(res);
        this.movies = res.data.movies;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    })
  }
}