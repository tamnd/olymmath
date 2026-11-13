---
tag: TX0ZE4GH7F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 23rd Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3497151
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50805
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154727
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 23rd Philippine MO Qualifying Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 23rd Philippine Mathematical Olympiad Qualifying Stage
---
In rolling three fair twelve-sided dice simultaneously, what is the probability that the resulting numbers can be arranged to form a geometric sequence? $\text{(a) }\dfrac{1}{72} \text{(b) }\dfrac{5}{288} \text{(c) }\dfrac{1}{48} \text{(d) }\dfrac{7}{288}$
