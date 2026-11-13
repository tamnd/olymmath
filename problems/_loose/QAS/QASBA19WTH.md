---
tag: QASBA19WTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{S}=\left\{S_1,S_2,\ldots,S_n\right\}$ be a set of $n\geq 2020$ distinct points on the Euclidean plane, no three of which are collinear. Andy the ant starts at some point $S_{i_1}$ in $\mathcal{S}$ and wishes to visit a series of 2020 points $\left\{S_{i_1},S_{i_2},\ldots,S_{i_{2020}}\right\}\subseteq\mathcal{S}$ in order, such that $i_j>i_k$ whenever $j>k$. It is known that ants can only travel between points in $\mathcal{S}$ in straight lines, and that an ant's path can never self-intersect.

Find a positive integer $n$ such that Andy can always fulfill his wish.

(Lower n will be awarded more marks. Bounds for this problem may be used as a tie-breaker, should the need to do so arise.)

*Proposed by the ICMC Problem Committee*
