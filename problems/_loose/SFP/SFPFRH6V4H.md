---
tag: SFPFRH6V4H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Miklos Schweitzer
    url: https://artofproblemsolving.com/community/c6h3456400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2024
    source: hf-ai-mo-aops
    label: 2024 Miklos Schweitzer
---
An urn initially contains one red ball and one blue ball. In each step, we choose a uniform random ball from the urn. If it is red, then another red ball and another blue ball are placed in the urn. And when we choose a blue ball for the $k$ -th time, we put a blue ball and $2k + 1$ red balls in the urn. (The chosen balls are not removed; they remain in the urn.)

Let $G_n$ denote the number of red balls in the urn after $n$ steps. Prove that there exist constants $0 < c, \alpha < \infty$ such that $\frac{G_n}{n^\alpha} \to c$ almost surely.
