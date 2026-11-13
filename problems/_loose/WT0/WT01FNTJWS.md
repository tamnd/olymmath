---
tag: WT01FNTJWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90859
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=56
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a given street, there are $n$ houses numbered from 1 to $n$. Let $a_{i}(1 \leq i \leq n)$ be the number of people living in the house numbered $i$, and let $b_{i}(i \geq 1)$ be the number of houses on the street in which at least $i$ people live. Prove that

$$
a_{1}+a_{2}+\cdots+a_{n}=b_{1}+b_{2}+b_{3}+\cdots
$$
