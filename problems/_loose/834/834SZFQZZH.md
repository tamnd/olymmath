---
tag: 834SZFQZZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India PRMO
    url: https://artofproblemsolving.com/community/c6h1891641
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9605
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2013
    source: hf-ai-mo-aops
    label: 2013 India PRMO
---
Let $S_n=\sum_{k=0}^{n}\frac{1}{\sqrt{k+1}+\sqrt{k}}$ . What is the value of $\sum_{n=1}^{99}\frac{1}{S_n+S_{n-1}}$ ?
