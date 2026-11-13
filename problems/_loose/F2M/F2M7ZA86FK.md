---
tag: F2M7ZA86FK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ be an odd positive integer greater than 2. Find the smallest natural number $n$ such that $2^{1989}$ divides $m^{n}-1$.
(30th International Mathematical Olympiad Preliminary Question, 1989)

Thus, for all natural numbers $s$,
$$
2^{k+s} \mid m^{2^{s}}-1, 2^{k+s+1} \nmid m^{2^{s}}-1.
$$
(2) If the odd positive integer $m=2^{k} p-1$, where $p$ is an odd number and $k>1$.
Similarly, it can be proven that for all natural numbers $s$,
$$
2^{s+k} \mid m^{2^{s}}-1, 2^{s+k+1} \nmid m^{2^{s}}-1.
$$

Thus, we have
$$
\begin{array}{l}
2^{1989} \mid m^{2^{5}}-1 \\
1989 \leqslant s+k, \\
s \geqslant 1989-k .
\end{array}
$$

That is, when $k \leqslant 1989$, the smallest exponent $n=2^{1989-k}$.
$$
k>1989 \text {, then } n=2^{0}=1 \text { . }
$$
