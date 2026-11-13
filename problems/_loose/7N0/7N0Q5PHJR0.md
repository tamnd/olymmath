---
tag: 7N0Q5PHJR0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix an integer $n \ge 3$. Let $S$ be a set of $n$ points in the plane, no three of which are collinear. Given pairwise distinct points $A, B, C$ in $S$, the triangle $ABC$ is suitable for $AB$ if area $ABC \le$ area $ABX$ for all $X$ in $S$ different from $A$ and $B$. (Note that for a segment $AB$ there could be several suitable triangles.) A triangle is adequate if its vertices are all in $S$ and it is suitable for at least two of its sides. Prove that there are at least $\frac{1}{2}(n-1)$ adequate triangles.
Bulgaria, Alexadar Ivanov
