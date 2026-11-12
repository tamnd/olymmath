---
tag: NS669T8HPG
kind: problem
type: answer
answer: "1967"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of natural numbers $a_{0}, a_{1}$, $a_{2}, a_{3}, \ldots$ is formed according to the following rule:

$$
a_{0}, a_{1}, a_{2}=\left|a_{0}-a_{1}\right|, a_{3}=\left|a_{1}-a_{2}\right|, \ldots
$$

(and generally $a_{n}=\left|a_{n-2}-a_{n-1}\right|$ for all $n \geqslant 2$); the sequence continues until the first zero. It is known that each number in the sequence does not exceed 1967. What is the maximum number of terms that such a sequence can contain?
