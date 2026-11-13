---
tag: MNT0JT8HST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Z} \rightarrow \mathbb{Z}$ such that
$\boxed{1} \ f(1) = 1$
$\boxed{2} \ f(m+n)(f(m)-f(n)) = f(m-n)(f(m)+f(n)) \ \forall \ m,n \in \mathbb{Z}$
