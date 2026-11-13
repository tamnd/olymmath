---
tag: AQYQCTPTWF
kind: problem
type: answer
answer: k = ab
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a $ and $ b $ be natural numbers with property $ gcd(a,b)=1 $ . Find the least natural number $ k $ such that for every natural number $ r \ge k $ , there exist natural numbers $ m,n >1 $ in such a way that the number $ m^a n^b $ has exactly $ r+1 $ positive divisors.
