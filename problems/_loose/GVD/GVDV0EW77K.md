---
tag: GVDV0EW77K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h2073665
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32867
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231914
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2004
    source: hf-ai-mo-aops
    label: 2004 Olympic Revenge
---
If $a,b,c,x$ are positive reals, show that $$ \frac{a^{x+2}+1}{a^xbc+1}+\frac{b^{x+2}+1}{b^xac+1}+\frac{c^{x+2}+1}{c^xab+1}\geq 3 $$
