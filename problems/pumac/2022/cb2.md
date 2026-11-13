---
tag: 9Y13SE7GCM
kind: problem
appearances:
  - at: pumac/2022/cb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_B_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444920
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The *base factorial* number system is a unique representation for positive integers where the $n$ th digit from the right ranges from $0$ to $n$ inclusive and has place value $n!$ for all $n \ge 1.$ For instance, $71$ can be written in base factorial as $2321_{!} = 2 \cdot 4! + 3 \cdot 3! + 2 \cdot 2! + 1 \cdot 1!.$ Let $S_{!}(n)$ be the base $10$ sum of the digits of $n$ when $n$ is written in base factorial. Compute $\sum_{n=1}^{700} S_{!}(n)$ (expressed in base $10$ ).
