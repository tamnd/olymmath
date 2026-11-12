---
tag: RDX1RREC0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Taiwan TST Round  1
    url: https://artofproblemsolving.com/community/c6h2049546
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Taiwan TST Round  1
---
There are $n$ husbands and wives at a party in the palace. The husbands sit at a round table, and the wives sit at another round tables. The king and queen (not included in the $n$ couples) are going to shake hands with them one by one. Assume that the king starts from a man, and the queen starts from his wife. Consider the following two ways of shaking hands:

(i) The king shakes hands with the men one by one clockwise. Each time when the king shakes hands with a man, the queen moves clockwise to his wife and shakes hands with her. Assume that at last when the king gets back to the man he begins with, the queen goes around the table $a$ times.

(ii) The queen shakes hands with the women one by one clockwise. Each time when the queen shakes hands with a woman, the king moves clockwise to her husband and shakes hands with him. Assume that at last when the queen gets back to the woman she begins with, the king goes around the table $b$ times.

Determine the maximum possible value of $|a-b|$ .
