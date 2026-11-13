---
tag: XSK0J2F10Z
kind: problem
type: answer
answer: AX + BX + \sqrt{2}CX \geq \sqrt{5}AB
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232665
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Point $X$ lies in a right-angled isosceles $\triangle ABC$ ($\angle ABC = 90^\circ$). Prove that

$AX+BX+\sqrt{2}CX \geq \sqrt{5}AB$

and find for which points $X$ the equality is met.
