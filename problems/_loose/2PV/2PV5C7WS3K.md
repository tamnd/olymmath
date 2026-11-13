---
tag: 2PV5C7WS3K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1487617
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36613
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2017
    source: hf-ai-mo-aops
    label: 2017 South East Mathematical Olympiad
---
For any positive integer $n$ , let $D_n$ denote the set of all positive divisors of $n$ , and let $f_i(n)$ denote the size of the set $$ F_i(n) = \{a \in D_n | a \equiv i \pmod{4} \} $$ where $i = 1, 2$ .
Determine the smallest positive integer $m$ such that $2f_1(m) - f_2(m) = 2017$ .
