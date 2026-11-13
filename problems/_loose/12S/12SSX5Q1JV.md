---
tag: 12SSX5Q1JV
kind: problem
type: answer
answer: p^{}(\in{Z}_{+})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three. (50 points) Given a prime $p$, let $n$ be a positive integer no less than 2. If there exists a non-negative integer $\alpha$, satisfying:
$$
p^{\alpha} \mid \prod_{i=1}^{n-1} \mathrm{C}_{n}^{i} \text { and } p^{\alpha+1} \nmid \prod_{i=1}^{n-1} \mathrm{C}_{n}^{i} \text {, }
$$

Prove: $\alpha \leqslant n\left\lceil\log _{p} n\right\rceil-\frac{n-1}{p-1}$, and determine the value of $n$ when equality holds.
