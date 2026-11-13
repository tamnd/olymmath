---
tag: 3Y1NTSJJD6
kind: problem
type: answer
answer: "8116"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Noémie and Tristan are shepherds. Each owns a number of sheep that is a perfect square, that is, an integer that can be written in the form $n^{2}=n \times n$ with $n$ a positive or non-negative integer. We therefore denote $a^{2}$ as the number of sheep Noémie has and $b^{2}$ as the number of sheep Tristan has. After a quick count of the total number of sheep, they deduce that $97 \leqslant a^{2}+b^{2} \leqslant 108$. Determine the number of sheep each has, knowing that:

1. Noémie has strictly more sheep than Tristan;
2. each of them has at least 2 sheep;
3. the total number of sheep $a^{2}+b^{2}$ is odd.
