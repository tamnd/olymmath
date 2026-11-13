---
tag: H5Z0MYQ0KW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Kosovo National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h396432
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6718
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208844
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: xk-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Kosovo National Mathematical Olympiad
---
If $a,b,c$ are real positive numbers prove that the inequality holds:

$$ \frac{\sqrt{a^3+b^3}}{a^2+b^2}+\frac{\sqrt{b^3+c^3}}{b^2+c^2}+\frac{\sqrt{c^3+a^3}}{c^2+a^2} \ge \frac{6(ab+bc+ac)}{(a+b+c)\sqrt{(a+b)(b+c)(c+a)}} $$
