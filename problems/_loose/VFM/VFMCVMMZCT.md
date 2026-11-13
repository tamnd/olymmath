---
tag: VFMCVMMZCT
kind: problem
type: answer
answer: "45"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $\{a_{n}\}_{n=1}^{\infty}$ via $a_{1} = 1$ and $a_{n+1} = a_{n} + \lfloor \sqrt{a_{n}} \rfloor$ for all $n \geq 1$. What is the smallest $N$ such that $a_{N} > 2017$?
