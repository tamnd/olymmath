---
tag: JGMWG1V0K6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine, whether exists function $f$, which assigns each integer $k$, nonnegative integer $f(k)$ and meets the conditions:
$f(0) > 0$,
for each integer $k$ minimal number of the form $f(k - l) + f(l)$, where $l \in \mathbb{Z}$, equals $f(k)$.
