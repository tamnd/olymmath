---
tag: Q86EHM9AS9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h3062573
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 3
---
Let $N$ be a positive integer. Kingdom Wierdo has $N$ castles, with at most one road between each pair of cities. There are at most four guards on each road. To cost down, the King of Wierdos makes the following policy:

(1) For any three castles, if there are roads between any two of them, then any of these roads cannot have four guards.

(2) For any four castles, if there are roads between any two of them, then for any one castle among them, the roads from it toward the other three castles cannot all have three guards.

Prove that, under this policy, the total number of guards on roads in Kingdom Wierdo is smaller than or equal to $N^2$ .

*Remark*: Proving that the number of guards does not exceed $cN^2$ for some $c > 1$ independent of $N$ will be scored based on the value of $c$ .

*Proposed by usjl*
