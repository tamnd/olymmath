---
tag: WMRJPCBS7T
kind: problem
type: answer
answer: "3030"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154707
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 22nd Philippine Mathematical Olympiad
---
Let $P=\left(3^{1}+1\right)\left(3^{2}+1\right)\left(3^{3}+1\right) \ldots\left(3^{2020}+1\right)$. Find the largest value of the integer $n$ such that $2^{n}$ divides $P$.
