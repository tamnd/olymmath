---
tag: EJ3BSASAJ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1611860
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21985
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2017
    source: hf-ai-mo-aops
    label: 2017 Caucasus Mathematical Olympiad
---
Given real numbers $a$ , $b$ , $c$ satisfy inequality $\left| \frac{a^2+b^2-c^2}{ab} \right|<2$ . Prove that they also satisfy equalities $\left| \frac{b^2+c^2-a^2}{bc} \right|<2$ and $\left| \frac{c^2+a^2-b^2}{ca} \right| <2$ .
