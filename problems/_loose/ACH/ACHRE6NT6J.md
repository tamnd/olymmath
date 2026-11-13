---
tag: ACHRE6NT6J
kind: problem
type: answer
answer: 7^{n}-3\cdot6^{n}+3\cdot5^{n}-4^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be a set with $n$ elements. Determine the number of possibilities to select three subsets $A, B, C$ of $M$ such that

$$
\begin{gathered}
A \cap B \neq \emptyset, B \cap C \neq \emptyset, C \cap A \neq \emptyset \\
A \cap B \cap C=\emptyset
\end{gathered}
$$
