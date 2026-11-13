---
tag: Q60A0ACX6P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h141855
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79434
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2000
    source: hf-ai-mo-aops
    label: 2000 Vietnam Team Selection Test
---
Two players alternately replace the stars in the expression
$$*x^{2000}+*x^{1999}+...+*x+1 $$
by real numbers. The player who makes the last move loses if the resulting polynomial has a real root $t$ with $|t| < 1$ , and wins otherwise. Give a winning strategy for one of the players.
