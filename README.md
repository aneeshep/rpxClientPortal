rpxClientPortal (POC)
===============


 About
--------
   This app is a POC of RPX client portal. It's built with angularJS and HTML5 and also yeoman(http://yeoman.io) for the development workflow
   
   
Block Diagram
---------------

![alt text](https://raw.github.com/aneeshep/rpxClientPortal/master/bd.png "Block Diagram")

API Details
---------------

The App is depends RPX API for all its data requirements. It needs know the base uri in which the RPX API is running.
This is configured in  `'app/scripts/app.js'`


        'use strict';
        
        var baseUri = 'http://192.168.6.226:4000'; // Base Uri of the API
        
        angular.module('rpxClientPortalApp', [])
          .config(function ($routeProvider) {
            $routeProvider
              .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
              })
              .otherwise({
                redirectTo: '/'
              });
          });
          
This is the only one config option (baseUri) we need to set. The app will use the api in the following format: 

 `baseUri/npe_profiles.json?page=PageNum&per_page=PerPage`
 
 eg: `http://rpxapi.local:3002/npe_profiles.json?page=1&per_page=5`
 
 Sample response from API:
 
        {
          "response": {
            "params": {
              "current_page": 1,
              "total_pages": 30,
              "total_count": 1990
            },
            "npe_profiles": [
              {
                "active_lit_count": 11,
                "id": 65877,
                "lit_count": 115,
                "market_sector": [
                  "Automotive",
                  "Consumer Electronics and PCs",
                  "E-Commerce and Software",
                  "Energy",
                  "Financial Services",
                  "Industrial",
                  "Media Content and Distribution",
                  "Medical",
                  "Mobile Communications and Devices",
                  "Networking"
                ],
                "name": "Ronald A Katz Technology Licensing Lp",
                "slug_url": "\/entities\/ronald-a-katz-technology-licensing-lp"
              },
              {
                "active_lit_count": 37,
                "id": 63356,
                "lit_count": 373,
                "market_sector": [
                  "E-Commerce and Software",
                  "Mobile Communications and Devices",
                  "Networking"
                ],
                "name": "Arrivalstar SA",
                "slug_url": "\/entities\/arrivalstar-sa"
              },
              {
                "active_lit_count": 27,
                "id": 70492,
                "lit_count": 141,
                "market_sector": [
                  "Consumer Electronics and PCs",
                  "Mobile Communications and Devices",
                  "Networking"
                ],
                "name": "Brandywine Communications Technologies LLC",
                "slug_url": "\/entities\/brandywine-communications-technologies-llc"
              },
              {
                "active_lit_count": 2,
                "id": 60495,
                "lit_count": 8,
                "market_sector": [
                  "Biotech and Pharma"
                ],
                "name": "Max-Planck-Gesellschaft Zur Foerderung Der Wissenschaften eV",
                "slug_url": "\/entities\/max-planck-gesellschaft-zur-foerderung-der-wissenschaften-ev"
              },
              {
                "active_lit_count": 0,
                "id": 88147,
                "lit_count": 50,
                "market_sector": [
                  "Consumer Electronics and PCs",
                  "Consumer Products",
                  "Industrial",
                  "Mobile Communications and Devices",
                  "Other",
                  "Semiconductors"
                ],
                "name": "Jens Erik Sorensen",
                "slug_url": "\/entities\/jens-erik-sorensen"
              }
            ]
          }
        }

   
