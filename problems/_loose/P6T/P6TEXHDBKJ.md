---
tag: P6TEXHDBKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2041767
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59195
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2007
    source: hf-ai-mo-aops
    label: 2007 Singapore Junior Math Olympiad
---
For any positive integer $n$ , let $f(n)$ denote the $n$ - th positive nonsquare integer, i.e., $f(1) = 2, f(2) = 3, f(3) = 5, f(4) = 6$ , etc. Prove that $f(n)=n +\{\sqrt{n}\}$ where $\{x\}$ denotes the integer closest to $x$ .
(For example, $\{\sqrt{1}\} = 1, \{\sqrt{2}\} = 1, \{\sqrt{3}\} = 2, \{\sqrt{4}\} = 2$ .)
