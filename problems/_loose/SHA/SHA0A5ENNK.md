---
tag: SHA0A5ENNK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3100566
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69331
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2023
    source: hf-ai-mo-aops
    label: 2023 ELMO Shortlist
---
Define the *mexth* of $k$ sets as the $k$th smallest positive integer that none of them contain, if it exists. Does there exist a family $\mathcal F$ of sets of positive integers such that
- for any nonempty finite subset $\mathcal G$ of $\mathcal F$, the mexth of $\mathcal G$ exists, and
- for any positive integer $n$, there is exactly one nonempty finite subset $\mathcal G$ of $\mathcal F$ such that $n$ is the mexth of $\mathcal G$.

*Proposed by Espen Slettnes*
