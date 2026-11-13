---
tag: C9RX5G8MBX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h1709488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31903
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Bosnia And Herzegovina - Regional Olympiad
---
Board with dimesions $2018 \times 2018$ is divided in unit cells $1 \times 1$ . In some cells of board are placed black chips and in some white chips (in every cell maximum is one chip). Firstly we remove all black chips from columns which contain white chips, and then we remove all white chips from rows which contain black chips. If $W$ is number of remaining white chips, and $B$ number of remaining black chips on board and $A=min\{W,B\}$ , determine maximum of $A$
