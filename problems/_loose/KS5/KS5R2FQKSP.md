---
tag: KS5R2FQKSP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h84267
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54131
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2006
    source: hf-ai-mo-aops
    label: 2006 Romania National Olympiad
---
Let $ G$ be a finite group of $ n$ elements $ ( n \geq 2 )$ and $ p$ be the smallest prime factor of $ n$ . If $ G$ has only a subgroup $ H$ with $ p$ elements, then prove that $ H$ is in the center of $ G$ .

*Note.* The center of $ G$ is the set $ Z(G) = \left\{ a \in G \left| ax=xa, \forall x \in G \right. \right\}$ .
