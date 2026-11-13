---
tag: WB811C0QPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h421502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5994
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2010
    source: hf-ai-mo-aops
    label: 2010 Tuymaada Olympiad
---
Arranged in a circle are $2010$ digits, each of them equal to $1$ , $2$ , or $3$ . For each positive integer $k$ , it's known that in any block of $3k$ consecutive digits, each of the digits appears at most $k+10$ times. Prove that there is a block of several consecutive digits with the same number of $1$ s, $2$ s, and $3$ s.
