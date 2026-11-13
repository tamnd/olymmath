---
tag: ED7BSZT5XQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}=2 \sqrt{3}, b_{0}=3$ and $a_{n+1}=\frac{2 a_{n} b_{n}}{a_{n}+b_{n}}, b_{n+1}=\sqrt{a_{n+1} b_{n}}$ for $n \geqslant 0$. Prove that $\lim _{n \rightarrow \infty} a_{n}=\lim _{n \rightarrow \infty} b_{n}=\pi$.
