---
tag: 1JJ4YADAYV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h603641
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11599
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213556
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
We have a five-digit positive integer $N$ . We select every pair of digits of $N$ (and keep them in order) to obtain the $\tbinom52 = 10$ numbers $33$ , $37$ , $37$ , $37$ , $38$ , $73$ , $77$ , $78$ , $83$ , $87$ . Find $N$ .

*Proposed by Lewis Chen*
