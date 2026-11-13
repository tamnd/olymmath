---
tag: 70FAKNA90H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1397103
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15274
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 China Team Selection Test
---
Let $x>1$ , $n$ be positive integer. Prove that $$ \sum_{k=1}^{n}\frac{\{kx \}}{[kx]}<\sum_{k=1}^{n}\frac{1}{2k-1} $$ Where $[kx ]$ be the integer part of $kx$ , $\{kx \}$ be the decimal part of $kx$ .
