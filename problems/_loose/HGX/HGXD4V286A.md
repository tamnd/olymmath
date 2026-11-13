---
tag: HGXD4V286A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1334383
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31229
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230675
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Belarusian National Olympiad
---
For $x_1,x_2,...,x_n \geq 0$ prove $$ \frac{x_1(2x_1-x_2-x_3)}{x_2+x_3}+\frac{x_2(2x_2-x_3-x_4)}{x_3+x_4}+...+\frac{x_n(2x_n-x_1-x_2)}{x_1+x_2} \geq 0 $$
