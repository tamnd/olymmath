---
tag: QRQ9D3DKPA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2013058
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49508
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2000
    source: hf-ai-mo-aops
    label: 2000 Abels Math Contest (Norwegian MO)
---
Let $a,b,c$ and $d$ be non-negative real numbers such that $a+b+c+d = 4$ .
Show that $\sqrt{a+b+c}+\sqrt{b+c+d}+\sqrt{c+d+a}+\sqrt{d+a+b}\ge 6$ .
