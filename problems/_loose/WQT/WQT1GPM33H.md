---
tag: WQT1GPM33H
kind: problem
type: answer
answer: "49"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154176
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=99
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Area Stage
---
Let $R A L P$ be a trapezoid with $R A \| L P$. Let $H$ be the intersection of its diagonals. If the area of $\triangle R A H$ is 9 and the of $\triangle L P H$ is 16 , find the area of the trapezoid.
