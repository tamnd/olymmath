---
tag: 3P3C6DCCP8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85252
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0000.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b \geq 2$ be positive integers with $\operatorname{gcd}(a, b)=1$. Let $r$ be the smallest positive value assumed by an expression of the form $\frac{a}{b}-\frac{c}{d}$, where $c$ and $d$ are positive integers satisfying $c \leq a$ and $d \leq b$. Prove that $\frac{1}{r}$ is an integer.
