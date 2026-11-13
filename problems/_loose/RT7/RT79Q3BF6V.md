---
tag: RT79Q3BF6V
kind: problem
type: answer
answer: \frac{3\sqrt{3}}{244} < x < \frac{3\sqrt{3}}{82}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be an equilateral triangle with side 3. A circle $C_1$ is tangent to $AB$ and $AC$.
A circle $C_2$, with a radius smaller than the radius of $C_1$, is tangent to $AB$ and $AC$ as well as externally tangent to $C_1$.
Successively, for $n$ positive integer, the circle $C_{n+1}$, with a radius smaller than the radius of $C_n$, is tangent to $AB$ and $AC$ and is externally tangent to $C_n$.
Determine the possible values for the radius of $C_1$ such that 4 circles from this sequence, but not 5, are contained on the interior of the triangle $ABC$.
