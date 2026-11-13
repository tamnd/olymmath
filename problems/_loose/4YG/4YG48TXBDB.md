---
tag: 4YG48TXBDB
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154558
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippine Mathematical Olympiad
---
Let $N=\left(1+10^{2013}\right)+\left(1+10^{2012}\right)+\cdots+\left(1+10^{1}\right)+\left(1+10^{0}\right)$. Find the sum of the digits of $N$.
