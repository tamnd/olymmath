---
tag: YGW3XGV31G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $27$ boxes located in a row; each contains at least $12$ marbles. The allowed operation is transfer a ball from a box to its neighbor on the right, as long as said neighbor contains more pellets than the box from which the transfer will be made. We will say that a distribution initial of the balls is *happy * if it is possible to achieve, by means of a succession of permitted operations, that all the balls are in the same box. Determine what is the smallest total number of marbles with the that you can have a happy initial layout.
