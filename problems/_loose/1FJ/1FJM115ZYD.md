---
tag: 1FJM115ZYD
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anita plays the following single-player game: She is given a circle in the plane. The center of this circle and some point on the circle are designated "known points". Now she makes a series of moves, each of which takes one of the following forms:
(i) She draws a line (infinite in both directions) between two "known points"; or
(ii) She draws a circle whose center is a "known point" and which intersects another "known point".
Once she makes a move, all intersections between her new line/circle and existing lines/circles become "known points", unless the new/line circle is identical to an existing one. In other words, Anita is making a ruler-and-compass construction, starting from a circle.
What is the smallest number of moves that Anita can use to construct a drawing containing an equilateral triangle inscribed in the original circle?
