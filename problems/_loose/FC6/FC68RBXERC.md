---
tag: FC68RBXERC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Bulgaria JBMO TST
    url: https://artofproblemsolving.com/community/c6h1663440
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16285
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-jbmo-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Bulgaria JBMO TST
---
For real numbers $a$ and $b$ , define $$ f(a,b) = \sqrt{a^2+b^2+26a+86b+2018}. $$ Find the smallest possible value of the expression $$ f(a, b) + f (a,-b) + f(-a, b) + f (-a, -b). $$
