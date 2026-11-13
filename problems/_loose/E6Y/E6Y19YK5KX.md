---
tag: E6Y19YK5KX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214202
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo
    source: hf-mathnet
    label: JBMO Junior Balkan Mathematical Olympiad
---
Let $x,y$ and $z$ be non-negative real numbers satisfying the equation $x+y+z=xyz$. Prove that $2(x^2+y^2+z^2)\geq3(x+y+z)$.
