---
tag: N50BH9M7XE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163104
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2015
    source: hf-mathnet
    label: Slovenia National Math Olympiad 2015 – First Round
---
Let $a_{1}, a_{2}, a_{3}, \ldots$ be an arithmetic sequence. For any natural number $k$, we denote $S_{k}=$ $a_{1}+a_{2}+\ldots+a_{k}$. Prove that for any natural numbers $m$ and $n$,

$$
S_{n}-S_{m}=\frac{n-m}{n+m} S_{n+m}
$$
