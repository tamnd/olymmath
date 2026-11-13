---
tag: PFNGKZRXVY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove:

If $p$ is a prime number and two integers $n, k$ with $0 \leq k \leq n$ are written in the number system with base $p$ as

$$
\begin{array}{r}
n=a_{t} \cdot p^{t}+a_{t-1} \cdot p^{t-1}+\ldots+a_{1} p+a_{0} \\
k=b_{t} \cdot p^{t}+b_{t-1} \cdot p^{t-1}+\ldots+b_{1} p+b_{0}
\end{array}
$$

$\left(a_{j}, b_{j}\right.$ integers with $0 \leq a_{j}<p, 0 \leq b_{j}<p$ for $\left.j=0,1, \ldots, t\right)$, then the number $\binom{n}{k}$ leaves the same remainder when divided by $p$ as

$$
\binom{a_{t}}{b_{t}} \cdot\binom{a_{t-1}}{b_{t-1}} \cdot \ldots \cdot\binom{a_{1}}{b_{1}} \cdot\binom{a_{0}}{b_{0}}
$$
