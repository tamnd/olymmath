---
tag: 6XDSJYETGA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2522755
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39126
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1998
    source: hf-ai-mo-aops
    label: 1998 French Mathematical Olympiad
---
Let $(u_n)$ be a sequence of real numbers which satisfies $$ u_{n+2}=|u_{n+1}|-u_n \text{for all }n\in\mathbb N. $$ Prove that there exists a positive integer $p$ such that $u_n=u_{n+p}$ holds for all $n\in\mathbb N$ .
