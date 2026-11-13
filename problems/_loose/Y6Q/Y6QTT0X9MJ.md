---
tag: Y6QTT0X9MJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $v_{1}=2, v_{2}=2+1=3, v_{3}=2 \cdot 3+1=7, \cdots, v_{n}=v_{1} v_{2} \cdots v_{n-1}+1$, and
$$
S_{n}=\frac{1}{v_{1}}+\cdots+\frac{1}{v_{n}}
$$

Prove or disprove the following statement: For any positive integer $n, S_{n}<1$, and for any $n$ positive integers $I_{n}$ containing $v_{1}, v_{2}, \cdots, v_{n-1}$, if $I_{n}<1$, then $I_{n} \leqslant S_{n}<1$. Therefore, $S_{n}$ is the number in $\left\{I_{n} \mid I_{n}<1\right\}$ closest to 1.
