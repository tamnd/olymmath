---
tag: 2TQPQAFXJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90166
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $a, b, c$ are rational numbers such that

$$
\begin{aligned}
& \left(a^{2}+1\right)^{3}=b+1 \\
& \left(b^{2}+1\right)^{3}=c+1 \\
& \left(c^{2}+1\right)^{3}=a+1
\end{aligned}
$$

Prove that $a=b=c=0$.
