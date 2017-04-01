# xls-merger
Node.js - Quick cli tool to merge XLS files and order by a given column.

## Install

    $ npm i -g xls-merger

## Usage

    $ xls-merger -c <COLUMN> fileA.xls fileB.xls <...>

## Known issues

- Date fields are stored as Integers, the output file manually requires a "Format Cells -> Date" (see [#596](https://github.com/SheetJS/js-xlsx/issues/586)).

### Coded for *Christine* :tada:, I hope this will come in handy.
