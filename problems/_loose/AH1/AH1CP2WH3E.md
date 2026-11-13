---
tag: AH1CP2WH3E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h498974
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8362
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
For positive integers $1 \le n \le 100$ , let $$ f(n) = \sum_{i=1}^{100} i\left\lvert i-n \right\rvert. $$ Compute $f(54)-f(55)$ .

*Proposed by Aaron Lin*
