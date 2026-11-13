---
tag: QEDT2QE666
kind: problem
type: answer
answer: "225"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u_n$ be the $n^\text{th}$ term of the sequence $$1,\,\,\,\,\, 2,\,\,\,\,\, 5,\,\,\,\,\, 6,\,\,\,\,\, 9,\,\,\,\,\, 12,\,\,\,\,\, 13,\,\,\,\,\, 16,\,\,\,\,\, 19,\,\,\,\,\, 22,\,\,\,\,\, 23,\ldots,$$ where the first term is the smallest positive integer that is $1$ more than a multiple of $3$, the next two terms are the next two smallest positive integers that are each two more than a multiple of $3$, the next three terms are the next three smallest positive integers that are each three more than a multiple of $3$, the next four terms are the next four smallest positive integers that are each four more than a multiple of $3$, and so on: $$\underbrace{1}_{1\text{ term}},\,\,\,\,\,\,\underbrace{2,\,\,\,\,\, 5}_{2\text{ terms}} ,\,\,\,\,\,\,\underbrace{6,\,\,\,\,\, 9,\,\,\,\,\, 12}_{3\text{ terms}},\,\,\,\,\,\,\underbrace{13,\,\,\,\,\, 16,\,\,\,\,\, 19,\,\,\,\,\, 22}_{4\text{ terms}},\,\,\,\,\,\,\underbrace{23,\ldots}_{5\text{ terms}},\,\,\,\,\,\,\ldots.$$ Determine $u_{2008}$.
