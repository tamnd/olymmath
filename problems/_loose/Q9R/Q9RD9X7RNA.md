---
tag: Q9RD9X7RNA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will say that a set $ A $ of points is *disastrous * if it meets the following conditions:
$\bullet$ There are no $ 3 $ collinear points
$\bullet$ There is not a trio of mutually equal distances between points.
If $ P $ and $ Q $ are points in $ A $, then there are $ M $, $ N $, $ R $ and $ T $ in $ A $ such that: $$ d (P, Q) = \frac {d (M, N) + d (R, T)} {2} $$
Show that all disastrous sets are infinite.
