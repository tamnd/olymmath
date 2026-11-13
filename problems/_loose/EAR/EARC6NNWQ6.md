---
tag: EARC6NNWQ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a finite set $E$ of boys and girls.

A subset $\mathrm{G}$ of boys in $\mathrm{E}$ is said to be popular if every girl in $\mathrm{E}$ knows at least one of the boys in G. Similarly, a subset $F$ of girls is said to be popular if every boy in $E$ knows at least one of the girls in F. We assume that if a knows b, then b knows $a$.

Prove that the number of popular subsets formed by the boys has the same parity as the number of popular subsets formed by the girls.
