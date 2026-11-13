---
tag: GTBTNXDNSB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n,p,q \in \mathbb{N}, p<q $ then $${{(p+q)n}\choose{n}} \sum \limits_{k=0}^n (-1)^k {{n}\choose{k}} {{(p+q-1)n}\choose{pn-k}}= {{(p+q)n}\choose{pn}} \sum \limits_{k=0}^{\left [\frac{n}{2} \right ]} (-1)^k {{pn}\choose{k}} {{(q-p)n}\choose{n-2k}} $$
