---
tag: BC3PJYGY2W
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154070
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Tenth Philippine Mathematical Olympiad
---
Let each of the characters $A, B, C, D, E$ denote a single digit, and $A B C D E 4$ and $4 A B C D E$ represent six-digit numbers. If
$$
4 \times A B C D E 4=4 A B C D E,
$$
what is $C$ ?
