---
tag: A0DD8PWZBH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218434
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl
    source: hf-mathnet
    label: IMO 51st IMO Shortlisted Problems
---
Denote by $\mathbb{Q^+}$ the set of all positive rational numbers. Determine all functions $f:\mathbb{Q^+}\to\mathbb{Q^+}$ which satisfy the following equation for all
$x,y \in \mathbb{Q^+} : f(f(x)^2.y)=x^3.f(xy)$.
