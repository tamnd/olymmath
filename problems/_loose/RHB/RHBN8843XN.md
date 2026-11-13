---
tag: RHBN8843XN
kind: problem
type: answer
answer: f(x, y, z) = x^3 + 2y^3 + 4z^3 - 6xyz
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find, with proof, a polynomial $f(x,y,z)$ in three variables, with integer coefficients, such that for all $a,b,c$ the sign of $f(a,b,c)$ (that is, positive, negative, or zero) is the same as the sign of $a+b\sqrt[3]{2}+c\sqrt[3]{4}$.
