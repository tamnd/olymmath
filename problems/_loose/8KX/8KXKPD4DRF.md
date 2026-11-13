---
tag: 8KXKPD4DRF
kind: problem
type: answer
answer: p(x)=\alphax^{2}+\betax^{4},\alpha,\beta\in{R}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real-coefficient polynomials $p(x)$ such that for any real numbers $a, b, c$ satisfying $a b + b c + c a = 0$, we have
$$
p(a-b) + p(b-c) + p(c-a) = 2 p(a+b+c).
$$
