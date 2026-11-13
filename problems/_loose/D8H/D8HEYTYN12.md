---
tag: D8HEYTYN12
kind: problem
type: answer
answer: f(n)=n+(-1)^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86138
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain
---
Find all functions $f: \mathbb{Z} \rightarrow \mathbb{Z}$ that satisfy $f(n)+f(n+1)=2n+1$ for any integer $n$ and additionally

$$
\sum_{i=1}^{63} f(i)=2015
$$
