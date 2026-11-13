---
tag: 86H7YBZHEC
kind: problem
appearances:
  - at: pumac/2022/ca5
    primary: true
  - at: pumac/2022/cb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444937
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An *$n$ -folding process* on a rectangular piece of paper with sides aligned vertically and horizontally consists of repeating the following process $n$ times:

- Take the piece of paper and fold it in half vertically (choosing to either fold the right side over the left, or the left side over the right).
- Rotate the paper $90^\circ$ clockwise.

A $10$ -folding process is performed on a piece of paper, resulting in a $1$ -by- $1$ square base consisting of many stacked layers of paper. Let $d(i,j)$ be the Euclidean distance between the center of the $i$ th square from the top and the center of the $j$ th square from the top when the paper is unfolded. Determine the maximum possible value of $\sum_{i=1}^{1023} d(i, i+1).$
