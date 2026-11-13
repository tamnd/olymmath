---
tag: CWM2QF6TW4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: there exists a unique sequence of positive integers $a_{1}, a_{2}$, $\cdots$, such that $a_{1}=1, a_{2}>1$, and
$$
\begin{array}{l}
a_{n+1}\left(a_{n+1}-1\right)=\frac{a_{n} a_{n+2}}{\sqrt[3]{a_{n} a_{n+2}-1}+1}-1(n= \\
1,2, \cdots) .
\end{array}
$$
