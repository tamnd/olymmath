---
tag: 6WZ0TRBB6Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a polynomial, such that $f(x)=x^{2015}+a_1 x^{2014}+...+a_{2014} x+a_{2015}$. Velly and Polly are taking turns, starting from Velly changing the coefficients $a_i$ with real numbers , where each coefficient is changed exactly once. After 2015 turns they calculate the number of real roots of the created polynomial and if the root is only one, then Velly wins, and if it's not - Polly wins. Which one has a winning strategy?
