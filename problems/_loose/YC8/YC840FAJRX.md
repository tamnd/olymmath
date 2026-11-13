---
tag: YC840FAJRX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2845196
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Romania Team Selection Test
---
Let $m,n\geq 2$ be positive integers and $S\subseteq [1,m]\times [1,n]$ be a set of lattice points. Prove that if $$|S|\geq m+n+\bigg\lfloor\frac{m+n}{4}-\frac{1}{2}\bigg\rfloor$$then there exists a circle which passes through at least four distinct points of $S.$
