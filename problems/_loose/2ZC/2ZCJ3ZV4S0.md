---
tag: 2ZCJ3ZV4S0
kind: problem
type: answer
answer: 2,3,5,13,17
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For prime $p$, define the set
$$
\begin{aligned}
S_{1}(p)= & \left\{(a, b, c) \in \mathbf{Z}^{3} \mid a^{2} b^{2}+b^{2} c^{2}+\right. \\
& \left.c^{2} a^{2}+1 \equiv 0(\bmod p)\right\}
\end{aligned}
$$

and $S_{2}(p)=\left\{(a, b, c) \in \mathbf{Z}^{3} \mid a^{2} b^{2} c^{2}\left(a^{2} b^{2} c^{2}+\right.\right.$
$$
\left.\left.a^{2}+b^{2}+c^{2}\right) \equiv 0(\bmod p)\right\} \text {. }
$$

Find all primes $p$ such that
$$
S_{1}(p) \subseteq S_{2}(p) .
$$
