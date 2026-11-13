---
tag: WBN5J40QPZ
kind: problem
type: answer
answer: b
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98972
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If positive real numbers $a, b$ satisfy $a^{b}=b^{a}$, and $a<1$, prove that $a=b$.
Analysis Directly proving $a=b$ by constant identity transformation is quite difficult and not easy to start. Instead, consider weakening the proposition, first proving a weaker conclusion $a \geqslant b$, then proving $a \leqslant b$, thus deducing $a=b$.
