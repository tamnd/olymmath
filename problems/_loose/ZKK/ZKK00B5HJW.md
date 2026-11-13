---
tag: ZKK00B5HJW
kind: problem
type: answer
answer: D_{n}=n![1-\frac{1}{1!}+\frac{1}{2!}-\frac{1}{3!}+\cdots+\frac{(-1)^{n}}{n!}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A person writes $n$ letters to $n$ people, one for each, and prepares $n$ envelopes with the names and addresses of the recipients written on them. How many different ways are there to place the letters into the envelopes (one letter per envelope) so that no letter is placed in the envelope intended for its recipient?
