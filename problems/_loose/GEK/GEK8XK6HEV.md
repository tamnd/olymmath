---
tag: GEK8XK6HEV
kind: problem
type: answer
answer: "1210"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87366
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=30
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatia Mathematical Competitions
---
Let $a, b, c$ and $d$ be distinct real numbers. If $a$ and $b$ are solutions to the equation $x^{2}-10 c x-11 d=0$, and $c$ and $d$ are solutions to the equation $x^{2}-10 a x-11 b=0$, determine the sum $a+b+c+d$.
