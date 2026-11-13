---
tag: KRMPDYJXNX
kind: problem
type: answer
answer: p_{1}=3,n=2,p_{2}=7,p_{3}=11
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182805
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all prime numbers $p_{1}$ for which

$$
p_{2}=p_{1}+2^{n} ; p_{3}=p_{1}+2^{n+1} ; p_{4}=n p_{1}-3
$$

are also prime numbers. What values can $n$ take?
