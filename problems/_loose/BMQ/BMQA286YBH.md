---
tag: BMQA286YBH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the sides of a general triangle $ABC$, points $K, L, M, N, U$ are given:

- point $K$ is the midpoint of side $AC$,
- point $U$ is the midpoint of side $BC$,
- points $L$ and $M$ lie sequentially on segments $CK$ and $CU$ such that $LM \| KU$,
- point $N$ lies on segment $AB$ such that $|AN|:|AB|=3:7$,
- the ratio of the areas of polygons $UMLK$ and $MLKNU$ is 3:7.

Determine the ratio of the lengths of segments $LM$ and $KU$.
