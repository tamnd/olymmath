---
tag: 5Z840KXWXY
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kolya and Petya are dividing $2 n+1$ nuts, $n \geqslant 2$, with each wanting to get as many as possible. There are three ways of dividing (each goes through three stages).

1st stage: Petya divides all the nuts into two parts, each containing no fewer than two nuts.

2nd stage: Kolya divides each part again into two, each containing no fewer than one nut.

(1st and 2nd stages are common for all three ways.)

3rd stage: in the first way, Kolya takes the larger and the smaller parts; in the second way, Kolya takes both middle parts; in the third way, Kolya takes either the larger and the smaller parts or both middle parts, but in exchange for the right to choose, he gives Petya one nut.

Determine which way is the most advantageous for Kolya and which is the least advantageous for him.
