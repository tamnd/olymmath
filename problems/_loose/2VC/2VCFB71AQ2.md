---
tag: 2VCFB71AQ2
kind: problem
type: answer
answer: "3555555552"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A nine-digit positive integer $n$ is called a Moffat number if

- its digits are $0,1,2,3,4,5,6,7,8$ with no repetition,
- the sum of each group of 5 digits in a row is divisible by 5 , and
- the sum of each group of 7 digits in a row is divisible by 4 .

For example, 578460213 is not a Moffat number because, while the sum of each group of 7 digits in a row is divisible by 4 , not all of the sums of groups of 5 digits in a row are divisible by 5 . Determine the sum of all Moffat numbers.
