---
tag: F0W1N59JFP
kind: problem
type: answer
answer: a + b + c = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(a,b, c)$ of real numbers for which there exists a non-zero function $f: R \to R$, such that $$af(xy + f(z)) + bf(yz + f(x)) + cf(zx + f(y)) = 0$$ for all real $x, y, z$.

(E. Barabanov)
