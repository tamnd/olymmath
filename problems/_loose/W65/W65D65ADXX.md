---
tag: W65D65ADXX
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest positive integer $n$, such that for any integer $a$, if $(a, n)=1$, then $a^{2} \equiv 1(\bmod n)$.
