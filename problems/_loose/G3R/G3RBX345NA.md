---
tag: G3RBX345NA
kind: problem
type: answer
answer: (1, 1, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218963
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 69th Belarusian Mathematical Olympiad
---
Given the equation
$$
a^b\cdot b^c=c^a
$$
in positive integers $a$, $b$, and $c$.
*(i)* Prove that any prime divisor of $a$ divides $b$ as well.
*(ii)* Solve the equation under the assumption $b\ge a$.
*(iii)* Prove that the equation has infinitely many solutions.

*(I. Voronovich)*
