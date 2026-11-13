---
tag: WAP8VQ2VPE
kind: problem
type: answer
answer: '[\frac{2^{n+1}-5}{3}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2 n-1$ bulbs in a line. Initially, the central ( $n$-th) bulb is on, whereas all others are off. A step consists of choosing a string of at least three (consecutive) bulbs, the leftmost and rightmost ones being off and all between them being on, and changing the states of all bulbs in the string (for instance, the configuration $\bullet \circ \circ \circ \bullet$ will turn into $\circ \bullet \bullet \bullet \circ)$. At most how many steps can be performed?

(Dušan Djukić)

Time allowed: 270 minutes. Each problem is worth 7 points.
