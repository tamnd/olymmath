---
tag: BGKB2E60G9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb{R}^2$ denote the set of points in the Euclidean plane. For points $A,P\in\mathbb{R}^2$ and a real number $k$, define the *dilation* of $A$ about $P$ by a factor of $k$ as the point $P+k(A-P)$. Call a sequence of point $A_0, A_1, A_2,\ldots\in\mathbb{R}^2$ *unbounded* if the sequence of lengths $\left|A_0-A_0\right|,\left|A_1-A_0\right|,\left|A_2-A_0\right|,\ldots$ has no upper bound.
Now consider $n$ distinct points $P_0,P_1,\ldots,P_{n-1}\in\mathbb{R}^2$, and fix a real number $r$. Given a starting point $A_0\in\mathbb{R}^2$, iteratively define $A_{i+1}$ by dilating $A_i$ about $P_j$ by a factor of $r$, where $j$ is the remainder of $i$ when divided by $n$.

Prove that if $\left|r\right|\geq 1$, then for any starting point $A_0\in\mathbb{R}^2$, the sequence $A_0,A_1,A_2,\ldots$ is either periodic or unbounded.

*Proposed by the ICMC Problem Committee*
