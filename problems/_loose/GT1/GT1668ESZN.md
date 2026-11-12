---
tag: GT1668ESZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A square grid is colored in a checkerboard pattern with black and white colors. Then the white cells are recolored in red and blue such that cells adjacent by a corner are of different colors. Let $\ell$ be a line not parallel to the sides of the cells. For each segment $I$ parallel to $\ell$, we calculate the difference between the sums of the lengths of its red and blue segments. Prove that there exists a number $C$ (depending only on the line $\ell$) such that all the obtained differences do not exceed $C$.

(I. Bogdanov, K. Suhov)
