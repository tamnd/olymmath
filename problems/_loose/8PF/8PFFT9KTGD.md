---
tag: 8PFFT9KTGD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h369946
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2001
    source: hf-ai-mo-aops
    label: 2001 Iran MO (2nd round)
---
Suppose a table with one row and infinite columns. We call each $1\times1$ square a *room*. Let the table be finite from left. We number the rooms from left to $\infty$ . We have put in some rooms some coins (A room can have more than one coin.). We can do $2$ below operations: $a)$ If in $2$ adjacent rooms, there are some coins, we can move one coin from the left room $2$ rooms to right and delete one room from the right room. $b)$ If a room whose number is $3$ or more has more than $1$ coin, we can move one of its coins $1$ room to right and move one other coin $2$ rooms to left. $i)$ Prove that for any initial configuration of the coins, after a finite number of movements, we cannot do anything more. $ii)$ Suppose that there is exactly one coin in each room from $1$ to $n$ . Prove that by doing the allowed operations, we cannot put any coins in the room $n+2$ or the righter rooms.
