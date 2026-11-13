---
tag: 6QPAZFYT9F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055642
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19260
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Compute the number of functions $f\colon\{1, \dots, 15\} \to \{1, \dots, 15\}$ such that, for all $x \in \{1, \dots, 15\}$ , $$
\frac{f(f(x)) - 2f(x) + x}{15}
$$is an integer.

*Proposed by Ankan Bhattacharya*
