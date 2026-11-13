---
tag: F2MRR8WR1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2919876
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44443
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Iran MO (3rd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran 40th Iranian Mathematical Olympiad
---
Find all functions $f:\mathbb{N}\to\mathbb{N}$ such that for all $x,y\in\mathbb{N}$ : $$ 0\le y+f(x)-f^{f(y)}(x)\le1 $$ that here $$ f^n(x)=\underbrace{f(f(\ldots(f}_{n}(x))\ldots) $$
