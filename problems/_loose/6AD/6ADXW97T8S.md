---
tag: 6ADXW97T8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237550
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polygon is $\textit{monochromatic}$ if all its vertices are coloured by the same colour. Suppose now every point of the plane is coloured red or blue. Show that there exists either a monochromatic equilateral triangle of side length $2$, or a monochromatic equilateral triangle of side length $\sqrt{3}$, or a monochromatic rhombus of side length $1$.
