---
tag: MDN7239VWB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89024
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
At the beginning, the numbers 2009, 2012, and 2015 are on the board. In each step, Željko marks the numbers on the board as $a, b$, and $c$ in some order, and then replaces them with the numbers $3 a-b$, $3 b-c$, and $3 c-a$. Can Željko achieve, by repeatedly applying this procedure, that at some point the board shows three equal numbers?
