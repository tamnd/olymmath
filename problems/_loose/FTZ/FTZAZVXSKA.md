---
tag: FTZAZVXSKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that $K_{n}\left(x_{1}, \ldots, x_{n}\right)$ represents the sum of all monomials that are obtained from $x_{1} x_{2} \ldots x_{n}$ by erasing several non-overlapping pairs of adjacent variables $x_{i} x_{i+1}$. It is allowed to erase nothing or to erase everything; in the latter case, we consider that the monomial 1 (Euler) remains.
