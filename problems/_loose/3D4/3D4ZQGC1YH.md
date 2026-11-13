---
tag: 3D4ZQGC1YH
kind: problem
type: answer
answer: \sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive $C$ such that the inequality

$$
\frac{x}{\sqrt{y z}} \cdot \frac{1}{x+1}+\frac{y}{\sqrt{z x}} \cdot \frac{1}{y+1}+\frac{z}{\sqrt{x y}} \cdot \frac{1}{z+1} \leqslant C
$$

is satisfied for any positive numbers $x, y, z$ that satisfy the equation

$$
\frac{1}{x+1}+\frac{1}{y+1}+\frac{1}{z+1}=1
$$
