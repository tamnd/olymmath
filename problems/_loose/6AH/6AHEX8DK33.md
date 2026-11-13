---
tag: 6AHEX8DK33
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Humberto and Luciano use the break between classes to have fun with the following game: Humberto writes a list of distinct positive integers on a green sheet of paper and hands it to Luciano. Luciano then writes on a board all the possible sums, without repetitions, of one or more different numbers written on the green sheet. For example, if Humberto writes $1$, $3$ and $4$ on the green sheet, Luciano will write $1$, $3$, $4$, $5$, $7$ and $8$ on the board.

(a) Let $n$ be a positive integer. Determine all positive integers $k$ such that Humberto can write a list of $n$ numbers on the green sheet in order to guarantee that Luciano will write exactly $k$ numbers on the board.

(b) Luciano now decides to write a list of $m$ distinct positive integers on a yellow sheet of paper. Determine the smallest positive integer $m$ such that it is possible for Luciano to write this list so that, for any list that Humberto writes on the green sheet, with a maximum of $2023$ numbers, not all the numbers on the yellow sheet will be written on the board.
