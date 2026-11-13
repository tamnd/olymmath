---
tag: VN58ZE6TCQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A segment $AB$ of length $10 \text{m}$ is to be divided into 10 approximately equal segments by repeated halving as follows:

(1) First, choose arbitrary points $P_{1}^{(0)}, P_{2}^{(0)}, \ldots, P_{9}^{(0)}$ on the segment $AB$ and define $P_{0}^{(0)}=A$ and $P_{10}^{(0)}=B$.

(2) If for a natural number $n$, points $P_{0}^{(n)}, P_{1}^{(n)}, \ldots, P_{10}^{(n)}$ are already defined as the $n$-th approximation, then define $P_{0}^{(n+1)}=A$, $P_{10}^{(n+1)}=B$, and for $j=1,2, \ldots, 9$, define $P_{j}^{(n+1)}$ as the midpoint of the segment $P_{j-1}^{(n+1)} P_{j+1}^{(n)}$.

Let $Q_{1}, Q_{2}, \ldots, Q_{9}$ be the points on $AB$ that divide $AB$ into 10 exactly equal segments, such that $A Q_{1}=Q_{1} Q_{2}=\ldots=Q_{8} Q_{9}=Q_{9} B=1 \text{m}$.

Prove that there exists a natural number $N$ such that for any choice of points $P_{1}^{(0)}$, $P_{2}^{(0)}, \ldots, P_{9}^{(0)}$ on $AB$, the following holds:

In the $n$-th approximation, each of the points $P_{j}^{(N)} (j=1,2, \ldots, 9)$ deviates by less than $1 \text{mm}$ from the position of the point $Q_{j}$, i.e., $P_{j}^{(N)} Q_{j} < 1 \text{mm}$.
