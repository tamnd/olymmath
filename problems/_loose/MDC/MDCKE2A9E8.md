---
tag: MDCKE2A9E8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2522339
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37303
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2003
    source: hf-ai-mo-aops
    label: 2003 Croatia National Olympiad
---
For positive numbers $a_1,a_2,\ldots,a_n$ ( $n\ge2$ ) denote $s=a_1+\ldots+a_n$ . Prove that $$ \frac{a_1}{s-a_1}+\ldots+\frac{a_n}{s-a_n}\ge\frac n{n-1}. $$
