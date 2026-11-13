---
tag: 6BGKB7YEXJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3071450
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21323
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2022
    source: hf-ai-mo-aops
    label: 2022 Balkan MO Shortlist
---
Let $a, b, c, d$ be non-negative real numbers such that $$\frac{1}{a+1}+\frac{1}{b+1}+\frac{1}{c+1}+\frac{1}{d+1}=3.$$
Prove that $$3(ab+bc+ca+ad+bd+cd)+\frac{4}{a+b+c+d}\leqslant 5.$$*Vasile Cîrtoaje and Leonard Giugiuc*
