---
tag: QB84JDYS7W
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160714
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-posi/2020
    source: hf-indonesian-olympiad
    label: POSI_SMA_2020
---
How many pairs of integers $(x, y)$ are there such that $x \geq y$ and $\frac{1}{x}+\frac{1}{y}=\frac{1}{211}$ ?
