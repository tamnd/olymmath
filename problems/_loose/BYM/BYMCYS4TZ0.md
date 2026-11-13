---
tag: BYMCYS4TZ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
5・80 Two players, A and B, play a game of filling in the coefficients of a polynomial of at least 4th degree:
$$
x^{2 n}+\square x^{2 n-1}+\square x^{2 n-2}+\cdots+\square x+1
$$

They take turns choosing an empty slot and filling it with a real number as the coefficient of that term, until all slots are filled. If the resulting polynomial has no real roots, A wins; otherwise, B wins. If A goes first, who has a winning strategy? Explain your reasoning.
