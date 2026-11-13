---
tag: XTN7878C4Y
kind: problem
appearances:
  - at: pumac/2022/fa2
    primary: true
  - at: pumac/2022/fb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Indiv_Finals_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3152726
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73352
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anna and Bob play the following game. In the beginning, Bob writes down the numbers $1, 2, ... , 2022$ on a piece of paper, such that half of the numbers are on the left and half on the right. Furthermore, we assume that the $1011$ numbers on both sides are written in some order.
After Bob does this, Anna has the opportunity to swap the positions of the two numbers lying on different sides of the paper if they have different parity. Anna wins if, after finitely many moves, all odd numbers end up on the left, in increasing order, and all even ones end up on the right, in increasing order. Can Bob write down a arrangement of numbers for which Anna cannot win?
For example, Bob could write down numbers in the following way: $$ 4, 2, 5, 7, 9, ... , 2021\,\,\,\,\,\,\,\,\,\,, \,\,\,\,\,\,\,\,\,\,, 3, 1, 6, 8, 10, ... , 2022 $$ Then Anna could swap the numbers $1, 4$ and then swap $2, 3$ to win. However, if Anna swapped
the pairs $3, 4$ and $1, 2$ , the resulting numbers on the left and on the right would not be in increasing order, and hence Anna would not win.
