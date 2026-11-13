---
tag: JRQAFCDK75
kind: problem
type: answer
answer: \sin(x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a function $f : R \to R$ *cool* if there are real numbers $a$ and $b$ such that $f(x + a)$ is an even function and $f(x + b)$ is an odd function.
(a) Prove that every cool function is periodic.
(b) Give an example of a periodic function that is not cool.
