---
tag: 7AQCX7C6VP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An interesting property of numbers. Let's take an arbitrary natural number in the decimal system (for example, 2583) and calculate the sum of the squares of its digits ( $2^{2}+5^{2}+8^{2}+3^{2}=102$ ). We will do the same with the resulting number $\left(1^{2}+0^{2}+2^{2}=5\right)$ and continue this process.

$$
\left(5^{2}=25, 2^{2}+5^{2}=29,2^{2}+9^{2}=85, \ldots\right)
$$

Prove that if this process does not lead us to one (it is clear that after this, one will repeat infinitely), it will definitely lead to the number 145, after which a cycle will appear

$$
145,42,20,4,16,37,58,89
$$

which will repeat indefinitely.
