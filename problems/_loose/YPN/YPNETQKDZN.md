---
tag: YPNETQKDZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 BMT
    url: https://artofproblemsolving.com/community/c6h3165403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2022
    source: hf-ai-mo-aops
    label: 2022 BMT
---
The game Boddle uses eight cards numbered $6, 11, 12, 14, 24, 47, 54$ , and $n$ , where $0 \le n \le 56$ . An integer D is announced, and players try to obtain two cards, which are not necessarily distinct, such that one of their differences (positive or negative) is congruent to $D$ modulo $57$ . For example, if $D = 27$ , then the pair $24$ and $54$ would work because $24 - 54 \equiv 27$ mod $57$ . Compute $n$ such that this task is always possible for all $D$ .
