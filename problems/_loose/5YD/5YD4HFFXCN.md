---
tag: 5YD4HFFXCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h1998887
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70810
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261844
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2020
    source: hf-ai-mo-aops
    label: 2020 CMIMC Team
---
We say that a binary string $s$ *contains* another binary string $t$ if there exist indices $i_1,i_2,\ldots,i_{|t|}$ with $i_1 < i_2 < \ldots < i_{|t|}$ such that $$ s_{i_1}s_{i_2}\ldots s_{i_{|t|}} = t. $$ (In other words, $t$ is found as a not necessarily contiguous substring of $s$ .) For example, $110010$ contains $111$ . What is the length of the shortest string $s$ which contains the binary representations of all the positive integers less than or equal to $2048$ ?
