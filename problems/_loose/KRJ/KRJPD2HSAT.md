---
tag: KRJPD2HSAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3059300
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57314
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2001
    source: hf-ai-mo-aops
    label: 2001 Saint Petersburg Mathematical Olympiad
---
On the parliament of Sikinia, for any two deputies, there is third deputy, which knows exactly one of the two. Every deputy belongs to one of the two ruling parties. Every day, he president tells a certain group of deputies to change the party that they belong, and all the deputies which which know at least one of the deputies of the group has to change their party too. Prove that, the president can reach any configuration of deputies between two parties.(The president himself isn't a member of the parliament of Sikinia).

*Proposed by S. Berlov*
