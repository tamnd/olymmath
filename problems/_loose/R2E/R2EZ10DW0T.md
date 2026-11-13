---
tag: R2EZ10DW0T
kind: problem
type: answer
answer: "96"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154486
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=229
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
A wooden rectangular brick with dimensions 3 units by $a$ units by $b$ units is painted blue on all six faces and then cut into $3 a b$ unit cubes. Exactly $1 / 8$ of these unit cubes have all their faces unpainted. Given that $a$ and $b$ are positive integers, what is the volume of the brick?
