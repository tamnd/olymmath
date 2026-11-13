---
tag: GAPCMNB44W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132808
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a plane, there are $n$ points, where no three points are collinear. Some of these points are connected by line segments, and $N_{k}$ denotes the number of complete graphs on $k$ points. Prove:
$$
\frac{N_{k+1}}{N_{k}} \geqslant \frac{1}{k^{2}-1}\left(\frac{k^{2} N_{k}}{N_{k+1}}-n\right),
$$

where, $k \in\{2,3, \cdots, n-1\}, N_{k} \neq 0$.
