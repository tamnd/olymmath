---
tag: JJAMC3AJC8
kind: problem
type: answer
answer: a_{n}={\begin{pmatrix}0,&n=0;\\(2n)!\sum_{i=1}^{n}\frac{1}{i},&n\geqslant10\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If the sequence $\left\{a_{n}\right\}$ satisfies $a_{0}=0, a_{1}=2$, and
$$
\begin{aligned}
a_{n+2}= & 2(2 n+3)^{2} a_{n+1}- \\
& 4(n+1)^{2}(2 n+1)(2 n+3) a_{n} \\
& (n \geqslant 0),
\end{aligned}
$$

then the general term formula of the sequence $\left\{a_{n}\right\}$ is $ $ .
