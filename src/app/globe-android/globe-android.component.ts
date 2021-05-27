





import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { WindowService } from '../window.service';


declare var Earth: any
@Component({
  selector: 'app-globe-android',
  templateUrl: './globe-android.component.html',
  styleUrls: ['./globe-android.component.scss']
})
export class GlobeAndroidComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(    private ws: WindowService,
    ) { }
  country = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
  ];
  selectedCountry: any = [];

  ngOnInit(): void {


    if (document.getElementsByTagName('canvas').length > 1) {
      for (let i = 1; i <= document.getElementsByTagName('canvas').length - 1; i++) {
        document.getElementsByTagName('canvas')[i].remove();
      }
    }
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'globeData'
    script.src = 'assets/hologram/miniature.earth.js';
    head.appendChild(script);

  }

  ngAfterViewInit(): void {
    var myearth;
    var selected_countries = [];
    var self = this;
    var sprites = [];
    var connections = [
      [59.651901245117, 17.918600082397, 41.8002778, 12.2388889],
      [59.651901245117, 17.918600082397, 51.4706, -0.461941],

      [13.681099891662598, 100.74700164794922, -6.1255698204, 106.65599823],
      [13.681099891662598, 100.74700164794922, 28.566499710083008, 77.10310363769531],

      [30.12190055847168, 31.40559959411621, -1.31923997402, 36.9277992249],
      [30.12190055847168, 31.40559959411621, 25.2527999878, 55.3643989563],
      [30.12190055847168, 31.40559959411621, 41.8002778, 12.2388889],

      [28.566499710083008, 77.10310363769531, 7.180759906768799, 79.88410186767578],
      [28.566499710083008, 77.10310363769531, 40.080101013183594, 116.58499908447266],
      [28.566499710083008, 77.10310363769531, 25.2527999878, 55.3643989563],

      [-33.9648017883, 18.6016998291, -1.31923997402, 36.9277992249],

      [-1.31923997402, 36.9277992249, 25.2527999878, 55.3643989563],

      [41.8002778, 12.2388889, 51.4706, -0.461941],
      [41.8002778, 12.2388889, 40.471926, -3.56264],

      [19.4363, -99.072098, 25.79319953918457, -80.29060363769531],
      [19.4363, -99.072098, 33.94250107, -118.4079971],
      [19.4363, -99.072098, -12.0219, -77.114304],

      [-12.0219, -77.114304, -33.393001556396484, -70.78579711914062],
      [-12.0219, -77.114304, -34.8222, -58.5358],
      [-12.0219, -77.114304, -22.910499572799996, -43.1631011963],

      [-34.8222, -58.5358, -33.393001556396484, -70.78579711914062],
      [-34.8222, -58.5358, -22.910499572799996, -43.1631011963],

      [22.3089008331, 113.915000916, 13.681099891662598, 100.74700164794922],
      [22.3089008331, 113.915000916, 40.080101013183594, 116.58499908447266],
      [22.3089008331, 113.915000916, 31.143400192260742, 121.80500030517578],

      [35.552299, 139.779999, 40.080101013183594, 116.58499908447266],
      [35.552299, 139.779999, 31.143400192260742, 121.80500030517578],

      [33.94250107, -118.4079971, 40.63980103, -73.77890015],
      [33.94250107, -118.4079971, 25.79319953918457, -80.29060363769531],
      [33.94250107, -118.4079971, 49.193901062, -123.183998108],

      [40.63980103, -73.77890015, 25.79319953918457, -80.29060363769531],
      [40.63980103, -73.77890015, 51.4706, -0.461941],

      [51.4706, -0.461941, 40.471926, -3.56264],

      [40.080101013183594, 116.58499908447266, 31.143400192260742, 121.80500030517578],

      [-33.94609832763672, 151.177001953125, -41.3272018433, 174.804992676],
      [-33.94609832763672, 151.177001953125, -6.1255698204, 106.65599823],

      [55.5914993286, 37.2615013123, 59.651901245117, 17.918600082397],
      [55.5914993286, 37.2615013123, 41.8002778, 12.2388889],
      [55.5914993286, 37.2615013123, 40.080101013183594, 116.58499908447266],
      [55.5914993286, 37.2615013123, 25.2527999878, 55.3643989563],
    ];
    window.addEventListener("earthjsload", function () {

      myearth = new Earth("myearth", {
        mapBorderColor: '#2596be',
        mapLandColor: 'transparent',
        mapHitTest: true,
        autoRotate: true,

        mapSeaColor: 'transparent',
        transparent: true,



      });

      myearth.addEventListener("ready", function () {


        // connections

        var line = {
          color: '#009CFF',
          opacity: 0.35,
          hairline: true,
          offset: -0.5
        };

        for (var i = 0; i < 8; i++) {
          sprites[i] = this.addSprite({
            image: 'https://github.com/iamnavino/earth/blob/master/hologram/hologram-shine.svg',
            scale: 0.01,
            offset: -0.5,
            opacity: 0.5
          });
          pulse(i);
        }




      });
      myearth.addEventListener('click', function (event) {

        if (!event.id || event.id == 'SEA') return; // no country hit


        // toggle selection		
        if (selected_countries.indexOf(event.id) != -1) { // remove
          selected_countries.splice(selected_countries.indexOf(event.id), 1);
        } else { // add
          console.log(event)
          selected_countries.push(event.id);
        }


        // build mapStyles CSS string like: #US, #CN, #RU { fill: green; }
        if (selected_countries.length >= 0) {

          myearth.mapStyles = '#' + selected_countries.join(', #') + ' { fill: #4FB400; }';


          // show info
          self.loadScripts(selected_countries, 'filter')


        } else {

          myearth.mapStyles = '';

          // show info

        }


        // redraw map to apply new mapStyles
        myearth.redrawMap();


      });


      function pulse(index) {
        var random_location = connections[getRandomInt(0, connections.length - 1)];
        sprites[index].location = { lat: random_location[0], lng: random_location[1] };

        sprites[index].animate('scale', 0.5, {
          duration: 320, complete: function () {
            this.animate('scale', 0.01, {
              duration: 320, complete: function () {
                setTimeout(function () { pulse(index); }, getRandomInt(100, 400));
              }
            });
          }
        });
      }


      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }


    });

  }


  loadScripts(countryId?: any[], section?: string) {
    if (section === 'filter') {
      this.selectedCountry = []
      countryId.forEach(element => {
        this.selectedCountry.push(' ' + this.country.filter(i => i.code === element)[0].name)
      });
    }
    let data = JSON.stringify({
      countryName: this.selectedCountry
    })
    console.log(data)
  }



  ngOnDestroy() {

  }

  clearGlobe() {
    let data = JSON.stringify({
      countryName: []
    })
    console.log(data);
  setTimeout(() => {
    this.ws.nativeWindow.location.reload();
  }, 1000);  }
}
