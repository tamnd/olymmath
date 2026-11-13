---
tag: EG59GPJTZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p>3$ be a prime number, and $A_{l}$ denote the sum of the products of any $l$ distinct positive integers chosen from the set $\{1,2, \cdots, p-1\}$, i.e.,
$$
\begin{array}{l}
A_{1}=1+2+\cdots+(p-1), \\
A_{2}=1 \cdot 2+1 \cdot 3+\cdots+(p-2)(p-1), \\
\cdots \cdots \\
A_{p-1}=(p-1)!.
\end{array}
$$

Prove:
(1) When $1 \leqslant l \leqslant p-2$, $A_{l} \equiv 0(\bmod p)$;
(2) When $1<l<p$ and $l$ is odd, $A_{l} \equiv 0\left(\bmod p^{2}\right)$.
