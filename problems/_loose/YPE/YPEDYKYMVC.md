---
tag: YPEDYKYMVC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(3 points) The machine works with a magnetic card, on which any pair of natural numbers can be recorded. With the record $(m ; n)$, it can perform any of the following actions:
4) swap the numbers: $(m ; n) \rightarrow(n ; m)$;
5) replace the first number with the sum of the first and second: $(m ; n) \rightarrow(m+n ; n)$;
6) replace the second number with the absolute difference of the first and second: $(m ; n) \rightarrow(m ;|m-n|)$.

The machine cannot perform any other actions.

Prove that no manipulations with the machine and the card, initially recording the numbers ( $1037 ; 1159$ ), will allow you to obtain the record $(611 ; 1081)$ on it.
