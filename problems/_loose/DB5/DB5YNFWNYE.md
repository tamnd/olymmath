---
tag: DB5YNFWNYE
kind: problem
type: answer
answer: \frac{(n_{1}+n_{2}+n_{3})!}{n_{1}!n_{2}!n_{3}!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are three sets of real numbers: (A) $a_{1}<a_{2}<\cdots<a_{n_{1}}$; (B) $b_{1}<$ $b_{2}<\cdots<b_{n_{2}}$; (C) $c_{1}<c_{2}<\cdots<c_{n_{3}}$. Now we want to interweave them into one sequence, but the increasing order of each set must be maintained. How many different sequences can be formed?
