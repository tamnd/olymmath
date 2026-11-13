---
tag: E8874XBJXX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$, $b$, $c$ be given positive integers. Prove there exists some positive integer $N$ such that
$$
\begin{aligned}
a &\mid Nbc + b + c \\
b &\mid Nca + c + a
\end{aligned}
$$
