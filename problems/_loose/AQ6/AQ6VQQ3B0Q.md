---
tag: AQ6VQQ3B0Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164290
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Amandine and Brennon play a turn-based game, with Amadine starting.
On their turn, a player must select a positive integer which cannot be represented as a sum of multiples of any of the previously selected numbers.
For example, if $3, 5$ have been selected so far, only $1, 2, 4, 7$ are available to be picked;
if only $3$ has been selected so far, all numbers not divisible by three are eligible.
A player loses immediately if they select the integer $1$ .

Call a number $n$ *feminist* if $\gcd(n, 6) = 1$ and if Amandine wins if she starts with $n$ . Compute the sum of the *feminist* numbers less than $40$ .

*Proposed by Ashwin Sah*
