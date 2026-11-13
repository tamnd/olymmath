---
tag: ZNKK4KCHVQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_n$ denote the $n$-th Pell number defined by $P_{n+1}=2P_n+P_{n-1}$, $P_0=0$, $P_1=1$. Furthermore, let $T_n$ denote the $n$-th triangular number, that is
$T_n=\binom{n+1}2$. Show that
$$\sum_{n=0}^\infty4T_n\cdot\frac{P_n}{3^{n+2}}=P_3+P_4$$

*Proposed by Ángel Plaza*
