---
tag: EDYC45VJ2M
kind: problem
type: answer
answer: "92"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
F11 (29-3, UK) Let $\mathbf{N}^{*}$ be the set of positive integers, and define the function $f$ on $\mathbf{N}^{*}$ as follows:
(1) $f(1)=1, f(3)=3$;
(2) For $n \in \mathbf{N}^{*}$, we have
$$
\begin{array}{c}
f(2 n)=f(n), \\
f(4 n+1)=2 f(2 n+1)-f(n), \\
f(4 n+3)=3 f(2 n+1)-2 f(n) .
\end{array}
$$

Question: How many $n \in \mathbf{N}^{*}$, and $n \leqslant 1988$, satisfy $f(n)=n$?
