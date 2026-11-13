---
tag: M8B8QBBY8K
kind: problem
type: answer
answer: f(n,A,B)=n^{2}+n(-1)-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three, (50 points) Given a positive integer array
$$
A=\left(a_{1}, a_{2}, \cdots, a_{k}\right) \text {. }
$$

If for any $x_{1}, x_{2}, \cdots, x_{k} \in M$, we have
$$
a_{1} x_{1}+a_{2} x_{2}+\cdots+a_{k} x_{k} \notin M,
$$

then the set $M\left(M \subseteq \mathbf{Z}_{+}\right)$ is called "$A$-good". Define $f(n, A, B)$ as the largest positive integer $h$ such that the set
$$
S=\{n, n+1, \cdots, h\}
$$

can be divided into two sets $S_{1}$ and $S_{2}$ satisfying $S_{1} \cup S_{2}=S$, $S_{1} \cap S_{2}=\varnothing$, and $S_{1}$ is $A$-good, $S_{2}$ is $B$-good. If the arrays $A=\left(a_{1}, a_{2}, \cdots, a_{k}\right), B=\left(b_{1}, b_{2}, \cdots, b_{k}\right)(k \geqslant 2)$ satisfy
$$
\sum_{i=1}^{k} a_{i}=\sum_{i=1}^{k} b_{i}=s \text {, and } \min _{1 \leqslant i \leqslant k} a_{i}=\min _{1 \leqslant i \leqslant k} b_{i}=1,
$$

prove: $f(n, A, B)=n s^{2}+n(s-1)-1$.
