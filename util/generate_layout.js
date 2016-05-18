"use strict";

function computeProperties(file) {


    const fs = require('fs');
    const sizeOf = require('image-size');
    const path = require('path');
    const justify = require('justified-layout');
    const assert = require('assert');

    // Get the list of directories.
    const directories = fs.readdirSync('public/photography');

    let portfolio = { };

    directories.forEach(directory => {
        let photos = [];

        const files = fs.readdirSync(path.join('public/photography', directory));

        let sizes = [];
        files.forEach(photo => {
            sizes.push(sizeOf(path.join('public/photography',
                                        directory,
                                        photo)));
        });

        let layout = justify(sizes, {
            containerWidth: 720
        });

        assert.equal(layout.boxes.length, files.length);

        for (var ix = 0; ix < files.length; ++ix) {

            let style = {
                left: layout.boxes[ix].left + "px",
                top: layout.boxes[ix].top + "px",
                width: layout.boxes[ix].width + "px",
                height: layout.boxes[ix].height + "px",
            }

            photos.push({
                filename: path.basename(files[ix], '.jpg'),
                path: path.join('photography', directory, files[ix]),
                style: style
            });
        }

        portfolio[directory] = photos;
    });

    fs.writeFileSync(file, JSON.stringify(portfolio));
}

module.exports = computeProperties;

