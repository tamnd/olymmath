---
tag: JTRKNPX50W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1388530
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48595
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/1999
    source: hf-ai-mo-aops
    label: 1999 Mongolian Mathematical Olympiad
---
Given $a;b;c$ satisfying $a^{2}+b^{2}+c^{2}=2$ . Prove that:
a) $\left | a+b+c-abc \right |\leqslant 2$ .
b) $\left | a^{3}+b^{3}+c^{3}-3abc \right |\leqslant 2\sqrt{2}$
