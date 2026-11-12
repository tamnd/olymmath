---
tag: XBVJM3RSZW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3399925
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37410
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Cuba MO
---
There are $n$ light bulbs in a circle and one of them is marked.

Let operation $A$ :
Take a positive divisor $d$ of the number $n,$ starting with the light bulb marked and clockwise, we count around the circumference from $1$ to $dn$ , changing the state (on or off) to those light bulbs that correspond to the multiples of $d$ .

Let operation $B$ be:
Apply operation $ A$ to all positive divisors of $n$ (to the first divider that is applied is with all the light bulbs off and the remaining divisors is with the state resulting from the previous divisor).

Determine all the positive integers $n$ , such that when applying the operation on $B$ , all the light bulbs are on.
