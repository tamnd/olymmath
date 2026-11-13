---
tag: V0TY9WGWJ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A country has $n$ cities, and the distances between these cities are all different. The king plans to number these cities as 1, $2, \cdots, n$, and establish air routes in the following manner:

The 1st time, establish a two-way air route between the city numbered 1 and the city closest to it;

The 2nd time, establish a two-way air route between the city numbered 2 and the city second closest to it; $ $
The $(n-1)$-th time, establish a two-way air route between the city numbered $n-1$ and the city farthest from it.

Prove: The king can appropriately number these cities and arrange the air routes as described above, such that it is possible to travel by plane from any city to any other city.
