---
tag: 23TZJXCKDY
kind: problem
type: answer
answer: 2^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a circle, $n>1$ points, called positions, are marked, dividing it into equal arcs. The positions are numbered clockwise from 0 to $n-1$. Vasya places a chip in one of them. Then the following actions, called moves, are repeated an unlimited number of times: Petya names some natural number, and Vasya moves the chip clockwise or counterclockwise by the number of positions specified by Petya. If at some point after Vasya's move, the chip lands in position number 0, Vasya loses, and Petya wins. For which $n$ can Petya always win, regardless of Vasya's moves?
