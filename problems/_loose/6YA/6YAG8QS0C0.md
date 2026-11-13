---
tag: 6YAG8QS0C0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024412
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28874
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
Do there exist positive integers $a,b,c$ and $d$ such that $$ \begin{cases} \dfrac{a}{b} + \dfrac{c}{d} = 1 \dfrac{a}{d} + \dfrac{c}{b} = 2008\end{cases} $$ ?
