---
tag: GFX6MGN9JX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h401371
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5560
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2010
    source: hf-ai-mo-aops
    label: 2010 Romania National Olympiad
---
Let $a,b\in \mathbb{R}$ such that $b>a^2$ . Find all the matrices $A\in \mathcal{M}_2(\mathbb{R})$ such that $\det(A^2-2aA+bI_2)=0$ .
