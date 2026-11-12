---
tag: A4HA5AAKNN
kind: problem
type: answer
answer: 1+1/2+1/3+\ldots+1/n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The teacher of the probability theory club leaned back in his chair and looked at the screen. The list of those who signed up was ready. There were $n$ people in total. However, they were not in alphabetical order, but in a random order in which they came to the class.

"I need to sort them in alphabetical order," the teacher thought. "I will go through the list from top to bottom, and if necessary, I will move a student's surname up to the appropriate place. Each surname will have to be moved no more than once."

Prove that the expected number of surnames that will not need to be moved is $1 + 1/2 + 1/3 + \ldots$
