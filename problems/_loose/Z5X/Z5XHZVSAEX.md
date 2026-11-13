---
tag: Z5XHZVSAEX
kind: problem
type: answer
answer: "1024"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a blackboard, it's written the following expression

$ 1-2-2^2-2^3-2^4-2^5-2^6-2^7-2^8-2^9-2^{10}$

We put parenthesis by different ways and then we calculate the result. For example:

$ 1-2-\left(2^2-2^3\right)-2^4-\left(2^5-2^6-2^7\right)-2^8-\left( 2^9-2^{10}\right)= 403$ and

$ 1-\left(2-2^2 \left(-2^3-2^4 \right)-\left(2^5-2^6-2^7\right)\right)- \left(2^8- 2^9 \right)-2^{10}= -933$

How many different results can we obtain?
