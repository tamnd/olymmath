---
tag: YJPBD23W6F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Prove that $n$ is prime if and only if $${{n-1}\choose k}\equiv (-1)^{k}\pmod{n}$$ for all $k \in \{ 0, 1, \cdots, n-1 \}$.
