# cgb-fontsawesome-boxes

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## Requirements
* Wordpress 5+
* Fontsawesome Free
* tar (to create the plugin archive)
* docker (for development)

## Setup in Wordpress
* Use bunde script to bundle the plugin `./bundle.sh`
* Extract in `wp-content/plugins` 

## Development
* Run development task with watch
    * `npm run start`
* Start wordpress & mysql via docker
    * `docker-compose up -d`

## Known Issues

## Backlog
* Make configurable
    * Hardcoded breakpoint @ 1024px 