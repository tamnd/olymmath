---
tag: D77S8CTX0A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h367956
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2005
    source: hf-ai-mo-aops
    label: 2005 Iran MO (2nd round)
---
We have a $2\times n$ rectangle. We call each $1\times1$ square a room and we show the room in the $i^{th}$ row and $j^{th}$ column as $(i,j)$ . There are some coins in some rooms of the rectangle. If there exist more than $1$ coin in each room, we can delete $2$ coins from it and add $1$ coin to its right adjacent room OR we can delete $2$ coins from it and add $1$ coin to its up adjacent room. Prove that there exists a finite configuration of allowable operations such that we can put a coin in the room $(1,n)$ .
