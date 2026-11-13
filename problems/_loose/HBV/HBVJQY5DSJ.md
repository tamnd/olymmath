---
tag: HBVJQY5DSJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fames is playing a computer game with falling two-dimensional blocks. The playing field is $7$ units wide and infinitely tall with a bottom border. Initially the entire field is empty. Each turn, the computer gives Fames a $1\times 3$ solid rectangular piece of three unit squares. Fames must decide whether to orient the piece horizontally or vertically and which column(s) the piece should occupy ($3$ consecutive columns for horizontal pieces, $1$ column for vertical pieces). Once he confirms his choice, the piece is dropped straight down into the playing field in the selected columns, stopping all three of the piece's squares as soon as the piece hits either the bottom of the playing field or any square from another piece. All of the pieces must be contained completely inside the playing field after dropping and cannot partially occupy columns.

If at any time a row of $7$ spaces is all filled with squares, Fames scores a point.

Unfortunately, Fames is playing in *invisible mode*, which prevents him from seeing the state of the playing field or how many points he has, and he has already arbitrarily dropped some number of pieces without remembering what he did with them or how many there were.

For partial credit, find a strategy that will allow Fames to eventually earn at least one more point. For full credit, find a strategy for which Fames can correctly announce "I have earned at least one more point" and know that he is correct.
