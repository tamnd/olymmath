---
tag: 5KSMEC61AK
kind: problem
type: answer
answer: 2015-k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154356
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=7
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 19th Philippine Mathematical Olympiad
---
Let $N$ be a natural number whose base-2016 representation is $A B C$. Working now in base-10, what is the remainder when $N-(A+B+C+k)$ is divided by 2015, if $k \in$ $\{1,2, \ldots, 2015\} ?$
