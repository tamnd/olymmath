---
tag: P2Y9GKPC0Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250829
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=26
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the function $f (x) = (x - F_1)(x - F_2) ...(x -F_{3030})$ with $(F_n)$ is the Fibonacci sequence, which defined as $F_1 = 1, F_2 = 2$, $F_{n+2 }=F_{n+1} + F_n$, $n \ge 1$. Suppose that on the range $(F_1, F_{3030})$, the function $|f (x)|$ takes on the maximum value at $x = x_0$. Prove that $x_0 > 2^{2018}$.
