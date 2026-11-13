---
tag: XEDWSRN5DC
kind: problem
type: answer
answer: 10^{6}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given a combination lock consisting of 6 rotating discs. Each disc consists of digits $0,1,2, \ldots, 9$, in that order (after digit 9 comes 0 ). Lock is opened by exactly one combination. A move consists of turning one of the discs one digit in any direction and the lock opens instantly if the current combination is correct. Discs are initially put in the position 000000, and we know that this combination is not correct.

a) What is the least number of moves necessary to ensure that we have found the correct combination?

b) What is the least number of moves necessary to ensure that we have found the correct combination, if we know that none of the combinations $000000,111111,222222, \ldots, 999999$ is correct?

(Ognjen Stipetić, Grgur Valentić)
