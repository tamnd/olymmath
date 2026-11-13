---
tag: 6TF1WYEBY0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611760
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11672
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Find the sum of the decimal digits of $$ \left\lfloor \frac{51525354555657\dots979899}{50} \right\rfloor. $$ Here $\left\lfloor x \right\rfloor$ is the greatest integer not exceeding $x$ .

*Proposed by Evan Chen*
