---
tag: 8B0W1T7CKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and $p_{1}<p_{2}<\cdots<p_{k}<p_{k+1}$ be consecutive primes such that $p_{k} \leqslant n < p_{k+1}$. Define
$$
P(n)=\prod_{i=1}^{k} p_{i}, G(n)=\max _{2 \leqslant i \leqslant k+1}\left(p_{i}-p_{i-1}\right) \text {. }
$$

Define $m$ as the largest integer such that for each $p_{i}(1 \leqslant i \leqslant k)$, there exist residue classes $a_{p_{i}}\left(\bmod p_{i}\right)$, such that
$$
\left\{a_{p_{1}}\left(\bmod p_{1}\right), a_{p_{2}}\left(\bmod p_{2}\right), \cdots, a_{p_{k}}\left(\bmod p_{k}\right)\right\}
$$

can cover $\{1,2, \cdots, m\}$. Prove that for all positive integers $n$, we have
$$
G(P(n)+n) \geqslant m .
$$
(Wang Guangting)
