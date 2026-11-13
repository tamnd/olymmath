---
tag: 2WDBG73KC2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1486688
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36610
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234936
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
Let $a_1,a_2,\cdots,a_{n+1}>0$ . Prove that $$ \sum_{i-1}^{n}a_i\sum_{i=1}^{n}a_{i+1}\geq \sum_{i=1}^{n}\frac{a_i a_{i+1}}{a_i+a_{i+1}}\cdot \sum_{i=1}^{n}(a_i+a_{i+1}) $$
