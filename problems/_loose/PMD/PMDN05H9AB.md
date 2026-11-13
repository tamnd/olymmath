---
tag: PMDN05H9AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h587326
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40726
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/1994
    source: hf-ai-mo-aops
    label: 1994 Hong Kong TST
---
Given that, a function $f(n)$ , defined on the natural numbers, satisfies the following conditions: (i) $f(n)=n-12$ if $n>2000$ ; (ii) $f(n)=f(f(n+16))$ if $n \leq 2000$ .
(a) Find $f(n)$ .
(b) Find all solutions to $f(n)=n$ .
