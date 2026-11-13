---
tag: Q0HRW51DM0
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77399
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=67
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Préparation Olympique Française de Mathématiques
---
Let $ a, b, c $ be non-negative real numbers such that $ a + b + c = 1 $.

Prove that

$$
\frac{5 + 2b + c^2}{1 + a} + \frac{5 + 2c + a^2}{1 + b} + \frac{5 + 2a + b^2}{1 + c} \geq 13
$$
