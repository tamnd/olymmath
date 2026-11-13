---
tag: B3JKJZGQ59
kind: problem
type: answer
answer: "730"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154476
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippines Mathematical Olympiad
---
A student writes the six complex roots of the equation $z^{6}+2=0$ on the blackboard. At every step, he randomly chooses two numbers $a$ and $b$ from the board, erases them, and replaces them with $3 a b-3 a-3 b+4$. At the end of the fifth step, only one number is left. Find the largest possible value of this number.
