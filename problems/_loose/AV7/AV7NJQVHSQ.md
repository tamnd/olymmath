---
tag: AV7NJQVHSQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h2784236
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=450
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan Mathematics Olympiad
---
Find all functions $f,g:\mathbb{R}^2\to\mathbb{R}$ satisfying that
$$|f(a,b)-f(c,d)|+|g(a,b)-g(c,d)|=|a-c|+|b-d|$$
for all real numbers $a,b,c,d$ .

*Proposed by usjl*
