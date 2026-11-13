---
tag: 5EB5CF0BNG
kind: problem
type: answer
answer: a_1 = a_2 = \cdots = a_n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integers $n$, find all $n$-tuples of complex numbers $(a_1,..., a_n)$ satisfying $$(x+a_1)(x+a_2)\cdots (x+a_n)=x^n+\binom{n}{1}a_1 x^{n-1}+\binom{n}{2}a_2^2 x^{n-2}+\cdots +\binom{n}{n-1} a_{n-1}^{n-1}+\binom{n}{n}a_n^n.$$

Proposed by USJL.
