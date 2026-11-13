---
tag: K7FYAGMDB6
kind: problem
type: answer
answer: "1022"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154706
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=263
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
A $10 \times 1$ rectangular pavement is to be covered by tiles which are either green or yellow, each of width 1 and of varying integer lengths from 1 to 10 . Suppose you have an unlimited supply of tiles for each color and for each of the varying lengths. How many distinct tilings of the rectangle are there, if at least one green and one yellow tile should be used, and adjacent tiles should have different colors?
