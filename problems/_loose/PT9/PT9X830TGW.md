---
tag: PT9X830TGW
kind: problem
type: answer
answer: (5, -5, 5)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You are trying to maximize a function of the form $f(x, y, z) = ax + by + cz$, where $a$, $b$, and $c$ are constants. You know that $f(3, 1, 1) > f(2, 1, 1)$, $f(2, 2, 3) > f(2, 3, 4)$, and $f(3, 3, 4) > f(3, 3, 3)$. For $-5 \le x,y,z \le 5$, what value of $(x,y,z)$ maximizes the value of $f(x, y, z)$? Give your answer as an ordered triple.
