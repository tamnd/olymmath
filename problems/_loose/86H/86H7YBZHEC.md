---
tag: 86H7YBZHEC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
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
unplaced:
  - at: pumac/2022
    source: hf-ai-mo-aops
    label: 2022 Princeton University Math Competition
---
An *$n$ -folding process* on a rectangular piece of paper with sides aligned vertically and horizontally consists of repeating the following process $n$ times:

- Take the piece of paper and fold it in half vertically (choosing to either fold the right side over the left, or the left side over the right).
- Rotate the paper $90^\circ$ clockwise.

A $10$ -folding process is performed on a piece of paper, resulting in a $1$ -by- $1$ square base consisting of many stacked layers of paper. Let $d(i,j)$ be the Euclidean distance between the center of the $i$ th square from the top and the center of the $j$ th square from the top when the paper is unfolded. Determine the maximum possible value of $\sum_{i=1}^{1023} d(i, i+1).$
