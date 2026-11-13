---
tag: XN0ZN14RE9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h39350
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35847
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2005
    source: hf-ai-mo-aops
    label: 2005 China Team Selection Test
---
Let $n$ be a positive integer, and $a_j$ , for $j=1,2,\ldots,n$ are complex numbers. Suppose $I$ is an arbitrary nonempty subset of $\{1,2,\ldots,n\}$ , the inequality $\left|-1+ \prod_{j\in I} (1+a_j) \right| \leq \frac 12$ always holds.

Prove that $\sum_{j=1}^n |a_j| \leq 3$ .
