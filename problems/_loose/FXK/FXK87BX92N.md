---
tag: FXK87BX92N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75771
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 72nd Czech and Slovak Mathematical Olympiad
---
Consider the sequence $\left(a_{n}\right)_{n=1}^{\infty}$ defined as follows:

$$
a_{1}=3 \text{and} a_{n}=a_{1} a_{2} a_{3} \ldots a_{n-1}-1 \text { for all } n \geqq 2 .
$$

Prove that there exist

a) infinitely many primes dividing at least one term of this sequence;

b) infinitely many primes not dividing any term of this sequence.

(Martin Melicher)
