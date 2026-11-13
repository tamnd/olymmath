---
tag: P5SXCQZ5VM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791452
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203799
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
Let $f(n)$ count the number of values $0\le k\le n^2$ such that $43\nmid\binom{n^2}{k}$ . Find the least positive value of $n$ such that $$ 43^{43}\mid f\left(\frac{43^{n}-1}{42}\right) $$ *Proposed by Adam Bertelli*
