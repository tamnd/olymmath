---
tag: 4ARTN88YNQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h225694
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44366
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Iran MO (3rd Round)
---
Let $ g,f: \mathbb C\longrightarrow\mathbb C$ be two continuous functions such that for each $ z\neq 0$ , $ g(z)=f(\frac1z)$ . Prove that there is a $ z\in\mathbb C$ such that $ f(\frac1z)=f(-\bar z)$
