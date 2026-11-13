---
tag: Q4FZSBRKHB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3059291
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57313
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250103
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
For any positive integers $n>m$ prove the following inequality: $$ [m,n]+[m+1,n+1]\geq 2m\sqrt{n} $$ As usual, [x,y] denotes the least common multiply of $x,y$ *Proposed by A. Golovanov*
