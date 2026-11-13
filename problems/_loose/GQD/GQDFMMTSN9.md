---
tag: GQDFMMTSN9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h617715
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45754
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Kazakhstan National Olympiad
---
Exactly one number from the set $\{ -1,0,1 \}$ is written in each unit cell of a $2005 \times 2005$ table, so that the sum of all the entries is $0$ . Prove that there exist two rows and two columns of the table, such that the sum of the four numbers written at the intersections of these rows and columns is equal to $0$ .
