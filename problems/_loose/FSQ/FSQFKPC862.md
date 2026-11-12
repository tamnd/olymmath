---
tag: FSQFKPC862
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41780
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Matches on Cardboard. Suppose we have a box of matches, each of which is 1 unit long. Let us also be given a cardboard square with a side length of $n$ units. We will divide our square into $n^{2}$ smaller squares using straight lines. The task is to place the matches on the cardboard, fulfilling three conditions:
1) each match must cover a side of one of the smaller squares;
2) each of the smaller squares must have exactly two of its sides covered by matches;
3) matches cannot be placed on the edge of the cardboard.

For which $n$ does this problem have a solution?
