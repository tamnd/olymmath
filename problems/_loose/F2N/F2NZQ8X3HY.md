---
tag: F2NZQ8X3HY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider words written with the letters $a$ and $b$. We are given certain transformations of the form $m \rightarrow m^{\prime}$ where $m$ and $m^{\prime}$ are two words. Starting from an initial word, we perform successive transformations that consist of replacing a copy of the word $m$ appearing in the word with $m^{\prime}$. We denote $x^{k}=$ the word $x x \cdots x$, with the letter $x$ written $k$ times.

A transformation is terminal if, regardless of the starting word and the operations chosen, there comes a point where no more operations are possible. Which of the following transformations are terminal?
(i) $a^{2} b \rightarrow b a$

(ii) $a b \rightarrow b a$

(iii) $a b \rightarrow b^{2} a$

(iv) $a b \rightarrow b^{2} a^{2}$
