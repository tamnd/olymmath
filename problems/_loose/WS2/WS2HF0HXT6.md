---
tag: WS2HF0HXT6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h589753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11593
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213550
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
Define the infinite products $$ A = \prod\limits_{i=2}^{\infty} \left(1-\frac{1}{n^3}\right) \text{ and } B = \prod\limits_{i=1}^{\infty}\left(1+\frac{1}{n(n+1)}\right). $$ If $\tfrac{A}{B} = \tfrac{m}{n}$ where $m,n$ are relatively prime positive integers, determine $100m+n$ .

*Proposed by Lewis Chen*
