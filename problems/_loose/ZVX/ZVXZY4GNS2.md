---
tag: ZVXZY4GNS2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h414626
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6529
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2011
    source: hf-ai-mo-aops
    label: 2011 IMAC Arhimede
---
Let $a$ , $b$ and $c$ be positive real numbers such that $a+b+c=1$ . Prove that $\frac{a}{a^3+b^2c+c^2b} + \frac{b}{b^3+c^2a+a^2c} + \frac{c}{c^3+a^2b+b^2a} \le 1+\frac{8}{27abc}$
