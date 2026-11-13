---
tag: GTHG35CXKB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90318
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_{1}, a_{2}, \ldots$ of positive integers satisfies $a_{1}=1$ and

$$
a_{n+1}=2^{a_{n}}+a_{n}
$$

for $n \geq 1$. Prove that $a_{1}, a_{2}, \ldots, a_{243}$ leave distinct remainders when divided by 243 .
