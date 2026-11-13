---
tag: 4CTN3HV8TQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90295
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence

$$
5,9,49,2209, \ldots
$$

is defined by $a_{1}=5$ and $a_{n}=a_{1} a_{2} \cdots a_{n-1}+4$ for $n>1$. Prove that $a_{n}$ is a perfect square for $n \geq 2$.
