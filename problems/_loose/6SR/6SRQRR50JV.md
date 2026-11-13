---
tag: 6SRQRR50JV
kind: problem
type: answer
answer: AB^2 + DC^2 = AC^2 + BD^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230469
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The external angle bisector of the angle $A$ of an acute-angled triangle $ABC$ meets the circumcircle of $\vartriangle ABC$ at point $T$. The perpendicular from the orthocenter $H$ of $\vartriangle ABC$ to the line $TA$ meets the line $BC$ at point $P$. The line $TP$ meets the circumcircce of $\vartriangle ABC$ at point $D$. Prove that $AB^2+DC^2=AC^2+BD^2$

A. Voidelevich
