---
tag: DF9T7XVDD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179270
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 66th ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $\left(x_{n}\right)_{n \geq 1}$ be a sequence of real numbers in the interval $[1, \infty)$. Suppose that the sequence $\left(y_{n}^{(k)}\right)_{n \geq 1}$, defined by $y_{n}^{(k)}=\left[x_{n}^{k}\right], n \geq 1$, is convergent for any $k \in \overline{\mathbb{N}}^{*}$. Prove that the sequence $\left(x_{n}\right)_{n \geq 1}$ is convergent. (By $[a]$ we denote the integer part of the real number $a$.)
