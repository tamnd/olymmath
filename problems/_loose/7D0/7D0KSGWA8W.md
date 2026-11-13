---
tag: 7D0KSGWA8W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162784
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad in Slovenia
---
The internal angle bisector of $\angle ACB$ in an acute-angled triangle $ABC$ intersects side $AB$ at point $D$. The circumcircle of triangle $ADC$ intersects side $BC$ at different points $C$ and $E$. The line through point $B$, parallel to line $AE$, intersects line $CD$ at point $F$. Prove that triangle $AFB$ is isosceles.
