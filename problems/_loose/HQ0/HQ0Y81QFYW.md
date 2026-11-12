---
tag: HQ0Y81QFYW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_{k, l}(n)$ denote the number of partitions of the number $n$ into no more than $k$ summands, each of which does not exceed $l$.

Prove the equalities:
a) $P_{k, l}(n)-P_{k, l-1}(n)=P_{k-1, l}(n-l) ;$

b) $P_{k, l}(n)-P_{k-1, l}(n)=P_{k, l-1}(n-k)$;

c) $P_{k, l}(n)=P_{l, k}(n)$

d) $P_{k, l}(n)=P_{k, l}(k l-n)$.
