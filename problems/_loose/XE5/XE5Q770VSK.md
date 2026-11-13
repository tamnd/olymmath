---
tag: XE5Q770VSK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774491
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17512
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Let $a, b$ and $c$ be the distinct solutions to the equation $x^3-2x^2+3x-4=0$ . Find the value of $$ \frac{1}{a(b^2+c^2-a^2)}+\frac{1}{b(c^2+a^2-b^2)}+\frac{1}{c(a^2+b^2-c^2)}. $$
