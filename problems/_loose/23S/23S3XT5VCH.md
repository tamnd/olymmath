---
tag: 23S3XT5VCH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an odd integer, and let $S$ be a set of $n$ points in the plane with integer coordinates. Consider a permutation $\mathrm{f}: \mathrm{S} \rightarrow \mathrm{S}$ that satisfies the following property:

For any pair of points $A$ and $B$ belonging to $S$, the distance between $f(A)$ and $f(B)$ is greater than or equal to the distance between $A$ and $B$.

Show that there exists a point $X$, belonging to $S$, such that $f(X)=X$.
