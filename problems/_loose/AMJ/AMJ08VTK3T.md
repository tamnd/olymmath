---
tag: AMJ08VTK3T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h3041163
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=975
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2023
    source: hf-ai-mo-aops
    label: 2023 Olympic Revenge
---
We say that $H$ permeates $G$ if $G$ and $H$ are finite groups and for all subgroup $F$ of $G$ there is $H'\cong H$ with $H'\le F$ or $F\le H'\le G$ . Suppose that a non-abelian group $H$ permeates $G$ and let $S=\langle H'\le G | H'\cong H\rangle$ . Show that $$ |\bigcap_{H'\in S} H'|>1 $$
