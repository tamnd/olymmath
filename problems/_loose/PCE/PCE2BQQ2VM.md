---
tag: PCE2BQQ2VM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241846
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\ge 3$ be a positive integer. $S$ is a set of $n$ points on the plane, with no three collinear. $L$ is the set of all lines passing through any two points in $S$. For any $\ell \in L$, the *separating number* of $\ell$ is the product of the number of points in $S$ in the two sides of $\ell$, excluding the two points on $\ell$ itself. Determine the minimum possible total sum of all separating numbers.
