---
tag: BPT28DA1RT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3275432
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2018
    source: hf-ai-mo-aops
    label: 2018 BMT Spring
---
If ri are integers such that $0 \le r_i < 31$ and $r_i$ satisfies the polynomial $x^4 + x^3 + x^2 + x \equiv 30$ (mod $31$ ), find $$ \sum^4_{i=1}(r^2_i + 1)^{-1} \,\,\, (mod \,\,\, 31) $$ where $x^{-1}$ is the modulo inverse of $x$ , that is, it is the unique integer $y$ such that $0 < y < 31$ and $xy -1$ is divisible by $31$ .
