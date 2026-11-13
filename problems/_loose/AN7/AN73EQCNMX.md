---
tag: AN73EQCNMX
kind: problem
type: answer
answer: n = 1, 2, 12
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n$ such that for each natural number $a$ relatively prime with $n$ and $a \le 1 + \left\lfloor \sqrt{n} \right\rfloor$ there exists some integer $x$ with $a \equiv x^2 \mod n$.

Remark: "Natural numbers" is the set of positive integers.
