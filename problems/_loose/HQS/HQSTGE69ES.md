---
tag: HQSTGE69ES
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2210736
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54806
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2008
    source: hf-ai-mo-aops
    label: 2008 239 Open Mathematical Olympiad
---
For all positive numbers $a, b, c$ satisfying $\frac{1}{a} + \frac{1}{b} + \frac{1}{c} = 1$ , prove that: $$ \frac{a}{a+bc} + \frac{b}{b+ca} + \frac{c}{c+ab} \geq \frac{3}{4} . $$
