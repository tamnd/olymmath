---
tag: GFNKA8KJHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90235
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=34
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be positive integers. Define a sequence $x_{0}, x_{1}, x_{2}, \ldots$ by $x_{0}=0, x_{1}=1$, and $x_{n+2}=a x_{n+1}+b x_{n}$ for $n \geq 0$. Prove that

$$
\frac{x_{m+1} x_{m+2} \cdots x_{m+n}}{x_{1} x_{2} \cdots x_{n}}
$$

is an integer for all positive integers $m$ and $n$.
