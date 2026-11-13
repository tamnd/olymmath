---
tag: ZGR42BQVQM
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer. Suppose given any real $x\in (0,1)$ with decimal representation $0.a_1a_2a_3a_4\cdots$, one can color the digits $a_1,a_2,\cdots$ with $N$ colors so that the following hold:
1. each color is used at least once;
2. for any color, if we delete all the digits in $x$ except those of this color, the resulting decimal number is rational.
Find the least possible value of $N$.

*~Sutanay Bhattacharya*
