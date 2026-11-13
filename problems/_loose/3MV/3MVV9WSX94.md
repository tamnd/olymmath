---
tag: 3MVV9WSX94
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove for every integer $n$ with $n \geq 3$:

If $A_{n}$ is the number of all different representations of $n$ as a sum of three positive integer summands, then

$$
\left|A_{n}-\frac{n^{2}}{12}\right|<\frac{1}{2}
$$

Two representations are considered different if and only if one cannot be obtained from the other by changing the order of the summands.
