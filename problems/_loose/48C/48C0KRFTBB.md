---
tag: 48C0KRFTBB
kind: problem
type: answer
answer: x\in\bigcup_{k\in\mathbb{Z}}\langlek\pi,\frac{(2k+1)\pi}{2}\rangle
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all real numbers $x$ for which there exists a real number $y$ such that

$$
\frac{\sin (2 x)}{\sin (2 y)}=4 \sin (x+y) \cos (x-y)
$$
