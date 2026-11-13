---
tag: 4TCDTC5MS7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984879
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60515
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252593
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2008
    source: hf-ai-mo-aops
    label: 2008 Switzerland - Final Round
---
Show that each number is of the form $$ 2^{5^{2^{5^{...}}}}+ 4^{5^{4^{5^{...}}}} $$ is divisible by $2008$ , where the exponential towers can be any independent ones have height $\ge 3$ .
