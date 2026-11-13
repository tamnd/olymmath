---
tag: C3GT3JXT7F
kind: problem
type: answer
answer: f(a) = \log_{1999}(a)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let Q+ and Z denote the set of positive rationals and the set of inte-
gers, respectively. Find all functions f : Q+ → Z satisfying the following
conditions:
(i) f(1999) = 1;
(ii) f(ab) = f(a) + f(b) for all a, b ∈ Q+;
(iii) f(a + b) ≥ min{f(a), f(b)} for all a, b ∈ Q+.
