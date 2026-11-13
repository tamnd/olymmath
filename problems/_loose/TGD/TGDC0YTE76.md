---
tag: TGDC0YTE76
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the natural number $n$, we denote by $S(n)$ the sum of its digits. Example: for $n=2456$ we have

$$
\begin{gathered}
S(n)=S(2456)=2+4+5+6=16 \\
S(S(n))=S(S(2456))=S(16)=1+6=7
\end{gathered}
$$

Does there exist a natural number $n$ for which

$$
n+S(n)+S(S(n))=2011
$$
