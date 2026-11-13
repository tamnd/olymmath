---
tag: 2HJXH4PN9E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221932
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13804
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Define a $\textit{tasty residue}$ of $n$ to be an integer $1<a<n$ such that there exists an integer $m>1$ satisfying $$a^m\equiv a\pmod n.$$ Find the number of tasty residues of $2016$ .
