#!/bin/sh

SRC="$1"
LOW=65
convert $SRC.png $SRC.jpg
#convert $SRC.png -quality $LOW low_50_$SRC.jpg
#convert $SRC.png -quality $LOW -resize 40% "$SRC"_"$LOW"q_50pc.jpg

# To use this script,
# run the following from a terminal
# in a folder containing an image named foo.jpg (or whatever):
#   chmod u+x convert.sh
#   ./convert.sh foo
