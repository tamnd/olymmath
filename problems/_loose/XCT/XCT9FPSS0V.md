---
tag: XCT9FPSS0V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left\{x_{n}\right\}_{n=0}^{\infty},\left\{y_{n}\right\}_{n=0}^{\infty}$ satisfy
$$
\begin{array}{l}
x_{0}=1, x_{1}=4, x_{n+2}=3 x_{n+1}-x_{n} (n=0,1,2, \cdots) \text {; } \\
y_{0}=1, y_{1}=2, y_{n+2}=3 y_{n+1}-y_{n} (n=0,1,2, \cdots) \text {. } \\
\end{array}
$$
(1) Prove: For all non-negative integers $n$, $x_{n}^{2}-5 y_{n}^{2}+4=0$;
(2) If positive integers $a, b$ satisfy $a^{2}-5 b^{2}+4=0$, prove: There exists a non-negative integer $k$, such that $x_{k}=a, y_{k}=b$.
