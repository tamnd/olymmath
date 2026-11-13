---
tag: MTPHCWJMJD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb Q\to\mathbb Q$ such that for all $x,y,z,w\in\mathbb Q$,
$$f(f(xyzw)+x+y)+f(z)+f(w)=f(f(xyzw)+z+w)+f(x)+f(y).$$
