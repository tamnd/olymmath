---
tag: Z2TAN9D6YF
kind: problem
type: answer
answer: (m, n) = (1, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
find all pairs of relatively prime natural numbers $ (m,n) $ in such a way that there exists non constant polynomial f satisfying $$ gcd(a+b+1, mf(a)+nf(b) > 1 $$
for every natural numbers $ a $ and $ b $
