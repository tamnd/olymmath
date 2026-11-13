---
tag: ZMTR0XVTQ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h86763
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2006
    source: hf-ai-mo-aops
    label: 2006 All-Russian Olympiad
---
Given a $15\times 15$ chessboard. We draw a closed broken line without self-intersections such that every edge of the broken line is a segment joining the centers of two adjacent cells of the chessboard. If this broken line is symmetric with respect to a diagonal of the chessboard, then show that the length of the broken line is $\leq 200$ .
