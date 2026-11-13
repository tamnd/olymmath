---
tag: FN1N2Y07CN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247135
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=14
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer greater than or equal to $3$, and let $P_n$ be the collection of all planar (simple) $n$-gons no two distinct sides of which are parallel or lie along some line. For each member $P$ of $P_n$, let $f_n(P)$ be the least cardinal a cover of $P$ by triangles formed by lines of support of sides of $P$ may have. Determine the largest value $f_n(P)$ may achieve, as $P$ runs through $P_n$.
