---
tag: XNJM2VRAJR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h2683444
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37065
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Costa Rica - Final Round
---
In a set $X$ of n people, some know each other and others do not, where the relationship to know is symmetric; that is, if $ A$ knows $ B$ . then $ B$ knows $ A$ . On the other hand, given any $ 4$ people: $A, B, C$ and $D$ : if $A$ knows $B$ , $B$ knows $C$ and $C$ knows $D$ , then it happens at least one of the following three: $A$ knows $C, B$ knows $D$ or $A$ knows $D$ . Prove that $X$ can be partition into two sets $Y$ and $Z$ so that all elements of $Y$ know all those of $Z$ or no element in $Y$ knows any in $Z$ .
