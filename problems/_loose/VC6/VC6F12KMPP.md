---
tag: VC6F12KMPP
kind: problem
type: answer
answer: (p,q)=(-4,4),(-2,1),(2,1),(4,4),(0,-n^2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75851
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=74
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic Czech and Slovak Mathematical Olympiad
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatian Mathematical Society Competitions
---
Determine all pairs $(p, q)$ of integers such that $p$ is an integer multiple of $q$ and the quadratic equation $x^{2} + p x + q = 0$ has at least one integer root.
