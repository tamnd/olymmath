---
tag: 85CWQ3KWD8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 AIME
    url: https://artofproblemsolving.com/community/c6h3248108
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1383
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: aime
    source: hf-ai-mo-aops
    label: 2024 AIME
---
Jen randomly picks $4$ distinct elements from $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$ . The lottery machine also picks $4$ distinct elements. If the lottery machine picks at least $2$ of Jen's numbers, Jen wins a prize. If the lottery machine's numbers are all $4$ of Jen's, Jen wins the Grand Prize. Given that Jen wins a prize, what is the probability she wins a Grand Prize?
