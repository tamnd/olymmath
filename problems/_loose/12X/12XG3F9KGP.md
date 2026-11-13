---
tag: 12XG3F9KGP
kind: problem
type: answer
answer: n = 3, 4, 6, 8, 12, 24
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive integers $n \ge 2$ that satisfy the following condition; For all integers $a, b$ relatively prime to $n$, $$a \equiv b \pmod{n}\Longleftrightarrow ab \equiv 1 \pmod{n}.$$
