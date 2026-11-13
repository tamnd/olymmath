---
tag: 2PP296BCQE
kind: problem
type: answer
answer: x = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242879
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2016
    source: hf-mathnet
    label: Baltic Way Baltic Way 2016
---
Prove that for all real $x > 0$ holds the inequality $$\sqrt{\frac{1}{3x+1}}+\sqrt{\frac{x}{x+3}}\ge 1.$$
For what values of $x$ does the equality hold?
