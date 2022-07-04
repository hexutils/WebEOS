WebEOS File Browser
===================

A PHP-based interface for displaying images, opening interactive plots, and browsing data files. 

Original code from Giovanni Petrucciani (@gpetruc) and others. Modified by Lucas Kang (@lkang).

This project visualizes densely populated folders and includes an optional login script to lock chosen directories. 

It is tailored for those who use [ROOT](http://root.cern.ch/), [SWAN](https://swan.web.cern.ch/), and [Plotly](https://plotly.com/) to store/process/visualize data.

# Setup

1. cd into your web folder

        cd '/eos/user/[$USER-first-initial]/[$USER]/www/'

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

1. Display .root files using [JSROOT](https://root.cern.ch/js/).

1. Display .html interactive plots generated with [Plotly](https://plotly.com/).

1. Password protect directories (technically brute-forceable if salt-based hashing is reverse-engineered).

1. Allows both master passwords and passwords which unlock individual directories.

1. Generate custom passwords for different guests that unlock unique subsets of directories.

# Example

https://kang.docs.cern.ch/lkang/example/
