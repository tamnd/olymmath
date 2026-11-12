---
tag: 3FHZHDE01V
kind: problem
type: answer
answer: 9\cdot10^{5}-5^{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To pass the test, a thousand sages form a column. One of the caps numbered from 1 to 1001 is hidden, and the rest are put on the sages in random order. Each sage can only see the numbers on the caps of all those in front of them. Then, starting from the back to the front, the sages call out integers. Each number must be between 1 and 1001, and no number that has already been said can be repeated. The test result is the number of sages who correctly name the number on their own cap. The sages knew the conditions of the test in advance and could agree on how to act.

a) Can they guarantee a result of more than 500?

b) Can they guarantee a result of at least 999?
