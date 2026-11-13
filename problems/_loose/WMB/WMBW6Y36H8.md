---
tag: WMBW6Y36H8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a circle $O$ with $2n$ smaller circles inside it, each of which is externally tangent to its two adjacent smaller circles and internally tangent to circle $O$. The points of tangency are sequentially labeled as $A_{1}, A_{2}, \cdots, A_{2 n}$. Let the distance between any two adjacent points $A_{i}, A_{j}$ be $a_{i j}$, and it is given that
$$
a_{23} a_{45} a_{67} \cdots a_{2 n, 1}=\delta .
$$

Prove: Among $a_{12}, a_{34}, a_{56}, \cdots, a_{2 n-1} a_{2 n}$, at least one is not less than $\sqrt[n]{\delta}$, and at least one is not greater than $\sqrt[n]{\delta}$.
