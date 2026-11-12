---
tag: 1EYJE6VT38
kind: problem
type: answer
answer: a_{1,2}=\\sqrt[20]{2^{20}-1};\quadb_{1,2}=\\sqrt[20]{2^{20}-1}/2,\quadp=-1,\quadq=1/4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find such real numbers $a, b, p, q$ so that the equality

$$
(2 x-1)^{20}-(a x+b)^{20}=\left(x^{2}+p x+q\right)^{10}
$$

is satisfied for any $x$.
