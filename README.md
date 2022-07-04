php-plots
=========

PHP-based web index for image displaying.

Original code from Giovanni Petrucciani (@gpetruc) and others. Modified by Lucas Kang (@lkang).

This project contains a web index script to help visualizing folders with many images.

It is tailored to people that use [ROOT](http://root.cern.ch) and [Plotly](https://plotly.com/) to store/visualize data.

# Setup

1. cd into your web folder

        cd '/eos/user/[$USER initial]/[$USER]/www/'

1. Clone this repository

        git clone git@github.com:lk11235/php-plots.git .

1. Open the web folder into your browser.

1. Profit.

# Features

1. Detect if a file is present with multiple formats.

1. Filter files to be selected with wild-cards or regex.

1. Zoom in/out images with mouse click.

1. Rearrange images with drag and drop.

1. Overlay content of .txt version on mouse hover.

1. Display root files using [JSROOT](https://root.cern.ch/js/)

1. Display html interactive plots generated with [Plotly](https://plotly.com/)

1. Password protect individual directories (hash-protected but brute-forcable)

1. Make passwords that only work on particular directories or make master passwords

# Example

https://kang.docs.cern.ch/lkang/example/
