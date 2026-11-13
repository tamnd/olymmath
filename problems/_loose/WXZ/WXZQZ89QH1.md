---
tag: WXZQZ89QH1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2015789
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28686
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2004 Tournament Of Towns
---
Each day, the price of the shares of the corporation "Soap Bubble, Limited" either increases or decreases by $n$ percent, where $n$ is an integer such that $0 < n < 100$ . The price is calculated with unlimited precision. Does there exist an $n$ for which the price can take the same value twice?
