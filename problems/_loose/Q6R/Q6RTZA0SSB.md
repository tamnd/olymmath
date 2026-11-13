---
tag: Q6RTZA0SSB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If the prime factorization of $m$ is

$$
m=p_{1}^{\alpha_{1}} p_{2}^{\alpha_{3}} \ldots p_{r}^{\alpha_{r}}
$$

then let us introduce the following notation:

$$
S(m)=(-1)^{a_{1}+a_{2}+\ldots+a_{r}}
$$

noting that $S(1)=1$. Prove that the sum extended over all divisors $d$ of some number $n$

$$
\sum S(d)=\left\{\begin{array}{l}
1 \\
0
\end{array}\right.
$$

according to whether $n$ is a perfect square or not. (The unit and $n$ itself are also counted among the divisors).
