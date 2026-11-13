---
tag: N3YCMQWS5D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, A_{2}, \cdots, A_{n}$ be $n$ sets of positive integers, where each set $A_{i}(1 \leqslant i \leqslant n)$ can be arranged into an increasing arithmetic sequence with a common difference of $d_{i}$, and $\cup_{i=1}^{n} A_{i}=\mathbf{Z}_{+}$. Define $f(m)$ as the number of distinct prime factors of $m$ $\left(m \in \mathbf{Z}_{+}\right)$, and define $f(1)=$ 0. Prove: there exist $1 \leqslant k \leqslant n$ and $1 \leqslant i_{1}<i_{2}<\cdots<i_{k} \leqslant n$, such that
$$
f\left(d_{i_{1}} d_{i_{2}} \cdots d_{i_{k}}\right) \leqslant k-1 \text {. }
$$

Proof Assume the conclusion does not hold, i.e., for any $1 \leqslant k \leqslant n$ and $1 \leqslant i_{1}<i_{2}<\cdots<i_{k} \leqslant n$, we have
$$
f\left(d_{i_{1}} d_{i_{2}} \cdots d_{i_{k}}\right) \geqslant k
$$
