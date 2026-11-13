---
tag: 3A45NCVFBG
kind: problem
type: answer
answer: "1.674"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximum value of the volume of a regular quadrilateral frustum with the upper base edge and side edge both equal to 1 (accurate to 0.001).

Note: If the upper base area of the regular quadrilateral frustum is $S_{1}$, the lower base area is $S_{2}$, and the height is $h$, then its volume
$$
V=\frac{1}{3} h\left(S_{1}+S_{2}+\sqrt{S_{1} S_{2}}\right) .
$$
