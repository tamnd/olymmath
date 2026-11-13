---
tag: JPX6BRPJME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89264
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
The sequence $\operatorname{Niz}\left(a_{n}\right)$ is defined recursively: $a_{1}=2, a_{n}=2\left(n+a_{n-1}\right)$ for $n \geqslant 2$.

Prove that $a_{n}<2^{n+2}$ for all $n \in \mathbb{N}$.
