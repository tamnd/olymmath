---
tag: 91BXQS67SC
kind: problem
type: answer
answer: 0;5;1;6;2;7;3;8;4;9or5;0;6;1;7;2;8;3;9;4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's write down the digits from 0 to 9 in a row: $0, 1, 2, 3, \ldots, 9$ and consider the sequence of sums of two adjacent digits:

$$
1 ; 3 ; 5 ; 7 ; 9 ; 11 ; 13 ; 15 ; 17
$$

In this sequence, each term, starting from the second, is 2 more than the previous one. Arrange the digits $0, 1, 2, \ldots, 9$ so that in the new sequence of sums of two adjacent digits, each term, starting from the second, is 1 more than the previous one.
