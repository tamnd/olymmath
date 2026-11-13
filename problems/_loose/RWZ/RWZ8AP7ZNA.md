---
tag: RWZ8AP7ZNA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points in a plane ($n>0$), no three of which lie on the same line. The $n$ points are to be connected by line segments such that there are no three points, each of which is connected to each of the other two.

Show that under these conditions, for the number $Z_{v}$ of connecting segments, the following holds:

$$
Z_{v} \leq\left[\frac{n^{2}}{4}\right]
$$

Furthermore, show that under the given conditions, $\left[\frac{n^{2}}{4}\right]$ connecting segments can be found. Note: $[x]$ denotes the greatest integer not greater than $x$.
