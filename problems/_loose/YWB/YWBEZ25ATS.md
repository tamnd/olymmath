---
tag: YWBEZ25ATS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3275446
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70128
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2018
    source: hf-ai-mo-aops
    label: 2018 BMT Spring
---
An integer $a$ is a quadratic nonresidue modulo a prime $p$ if there does not exist $x \in Z$ such that $x^2 \equiv a$ (mod $p$ ). How many ordered pairs $(a, b)$ modulo $29$ exist such that $$ a + b\equiv 1 \,\, (mod \,\, 29) $$ where both $a$ and $b$ are quadratic nonresidues modulo $29$ ?
