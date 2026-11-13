---
tag: 8W4NCHNEYR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 1993 points $P_{1}, \ldots, P_{1993}$, assume that no three points $P_{i}, P_{j}, P_{k}$ among them $(i \neq j$, $i \neq k, j \neq k)$ lie on a common line.

Furthermore, for certain pairs $(i, j)$ with $1 \leq i<j \leq 1993$, the segment $P_{i} P_{j}$ is constructed; it is assumed that each of the 1993 points $P_{i}$ is connected by one of the constructed segments to at least 1661 of the other 1993 points.

Prove that from these assumptions it always follows:

Among the $P_{i}$, there are 7 points, each of which is connected to every other of these 7 points by one of the constructed segments.
