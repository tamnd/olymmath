---
tag: GHTKCAJQG7
kind: problem
type: answer
answer: "61"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following sequence lists all the positive rational numbers that do not exceed $\frac12$ by first listing the fraction with denominator 2, followed by the one with denominator 3, followed by the two fractions with denominator 4 in increasing order, and so forth so that the sequence is
$$
\frac12,\frac13,\frac14,\frac24,\frac15,\frac25,\frac16,\frac26,\frac36,\frac17,\frac27,\frac37,\cdots.
$$
Let $m$ and $n$ be relatively prime positive integers so that the $2012^{\text{th}}$ fraction in the list is equal to $\frac{m}{n}$. Find $m+n$.
