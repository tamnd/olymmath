---
tag: YK9VXH6Y37
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h548270
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9983
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Find the sum of the real roots of the polynomial $$ \prod_{k=1}^{100} \left( x^2-11x+k \right) = \left( x^2-11x+1 \right)\left( x^2-11x+2 \right)\dots\left(x^2-11x+100\right). $$*Proposed by Evan Chen*
