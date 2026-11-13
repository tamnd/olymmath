---
tag: S22EYNPF51
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221768
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13771
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
At CMU, markers come in two colors: blue and orange. Zachary fills a hat randomly with three markers such that each color is chosen with equal probability, then Chase shuffles an additional orange marker into the hat. If Zachary chooses one of the markers in the hat at random and it turns out to be orange, the probability that there is a second orange marker in the hat can be expressed as simplified fraction $\tfrac{m}{n}$ . Find $m+n$ .
