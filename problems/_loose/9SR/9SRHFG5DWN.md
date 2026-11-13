---
tag: 9SRHFG5DWN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\section*{Problem 6A - 141246A}

Let $n$ be a natural number with $n \geq 2$.

Someone writes $n$ letters, each intended for exactly one of $n$ different addressees, and puts each of these letters into one of $n$ envelopes, without writing the addresses on the envelopes beforehand.

Since he no longer knows which letter is in which envelope, he writes the $n$ addresses on the $n$ envelopes at random (one address on each envelope).

Prove:

The probability $q_{n}$ that none of the addressees receives the envelope containing the letter intended for them is given by

$$
q_{n}=(-1)^{2} \cdot \frac{1}{2!}+(-1)^{3} \cdot \frac{1}{3!}+\ldots+(-1)^{n} \cdot \frac{1}{n!}
$$
