---
tag: WY3GVX4CQW
kind: problem
type: answer
answer: "0.000131"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Check Digit (8th grade. 3 points). The Simple-Dairy Telephone Company "Simple-Telecom" uses three-digit telephone numbers. The equipment is old, so during connection, errors in individual digits of the transmitted subscriber number are possible - each digit, independently of the others, has a probability of $p=0.02$ of being replaced by some other random digit. To reduce the probability of incorrect connection, the company uses the following rule: the first digit of the number is always equal to the remainder of the sum of the two other digits divided by 10. For example, the numbers 000 and 156 are possible, while the number 234 is not. If the check digit is incorrect during connection, an error message is displayed. Find the probability that, despite the measures taken, an incorrect connection will occur.
