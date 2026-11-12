---
tag: 10ENYZY21G
kind: problem
type: answer
answer: ^{2}n^{2}=^{2}^{2}+b^{2}^{2}-2\cos(A+C)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bretschneider's Theorem (Cosine Rule for Quadrilaterals). Let $a, b, c, d$ be the consecutive sides of a quadrilateral, $m$ and $n$ its diagonals, and $A$ and $C$ two opposite angles. Then the following relation holds:

$$
m^{2} n^{2}=a^{2} c^{2}+b^{2} d^{2}-2 a b c d \cos (A+C)
$$
