---
tag: R2JKPS4YJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1155592
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2016
    source: hf-ai-mo-aops
    label: 2016 Hong Kong TST
---
Mable and Nora play a game according to the following steps in order:

1. Mable writes down any 2015 distinct prime numbers in ascending order in a row. The product of these primes is Marble's score.

2. Nora writes down a positive integer

3. Mable draws a vertical line between two adjacent primes she has written in step 1, and compute the product of the prime(s) on the left of the vertical line

4. Nora must add the product obtained by Marble in step 3 to the number she has written in step 2, and the sum becomes Nora's score.

If Marble and Nora's scores have a common factor greater than 1, Marble wins, otherwise Nora wins.

Who has a winning strategy?
