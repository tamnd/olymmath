---
tag: A75BZY1H1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer no less than 2, and $2 \leq b_{0} \leq 2 n-1$, where $b_{0}$ is an integer. Consider the recursive sequence $\left\{b_{i}\right\}_{i \in N}$:
$$
b_{i+1}=\left\{\begin{array}{l}
2 b_{i}-1, \text { when } b_{i} \leq n \\
2 b_{i}-2 n, \text { when } b_{i}>n
\end{array}\right.
$$

Let $p\left(b_{0}, n\right)$ denote the smallest positive index $p$ such that $b_{p}=b_{0}$.
(1) Let $k$ be a given positive integer. Find $\mathrm{p}\left(2,2^{\mathrm{k}}\right)$ and $\mathrm{p}\left(2,2^{\mathrm{k}}+1\right)$;
(2) Prove that for any $n$ and $b_{0}$, $\mathrm{p}\left(\mathrm{b}_{0}, \mathrm{n}\right) \mid \mathrm{p}(2, \mathrm{n})$.
