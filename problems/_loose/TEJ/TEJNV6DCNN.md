---
tag: TEJNV6DCNN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75113
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=24
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 63rd Czech and Slovak Mathematical Olympiad
---
Let $M$ be the midpoint of side $AB$ of any triangle $ABC$. Prove that the equality $|\angle ABC| + |\angle ACM| = 90^{\circ}$ holds if and only if triangle $ABC$ is isosceles with base $AB$ or right-angled with hypotenuse $AB$.
