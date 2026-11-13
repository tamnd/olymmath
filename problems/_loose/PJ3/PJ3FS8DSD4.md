---
tag: PJ3FS8DSD4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb Z\to\mathbb Z$ such that
$$f(mf(n+1))=f(m+1)f(n)+f(f(n))+1$$for all integer pairs $(m,n)$.
