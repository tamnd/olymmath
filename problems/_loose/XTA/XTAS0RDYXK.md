---
tag: XTAS0RDYXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h603651
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11608
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213565
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Evaluate $$ \frac{1}{729} \sum_{a=1}^{9} \sum_{b=1}^9 \sum_{c=1}^9 \left( abc+ab+bc+ca+a+b+c \right). $$*Proposed by Evan Chen*
