---
tag: 6N95HWDB9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h386167
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7470
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2011
    source: hf-ai-mo-aops
    label: 2011 Vietnam National Olympiad
---
Let $\triangle ABC$ be a triangle such that $\angle C$ and $\angle B$ are acute. Let $D$ be a variable point on $BC$ such that $D\neq B, C$ and $AD$ is not perpendicular to $BC.$ Let $d$ be the line passing through $D$ and perpendicular to $BC.$ Assume $d \cap AB= E, d \cap AC =F.$ If $M, N, P$ are the incentres of $\triangle AEF, \triangle BDE,\triangle CDF.$ Prove that $A, M, N, P$ are concyclic if and only if $d$ passes through the incentre of $\triangle ABC.$
