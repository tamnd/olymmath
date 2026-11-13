---
tag: CTC5Y5J7CB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $S=\{a_{1}, \cdots, a_{r}\}$ is a set of positive integers, and let $S_{k}$ denote the set of subsets of $S$ with $k$ elements. Show that $$\text{lcm}(a_{1}, \cdots, a_{r})=\prod_{i=1}^{r}\prod_{s\in S_{i}}\gcd(s)^{\left((-1)^{i}\right)}.$$
