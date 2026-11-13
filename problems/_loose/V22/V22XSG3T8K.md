---
tag: V22XSG3T8K
kind: problem
type: answer
answer: p_{n}=\frac{2^{n+2}+(-1)^{n+1}-3}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain language, there are only two letters A and B. For words of this language, the following rules apply:
1) The only word of length 1 is A.
2) Any sequence of letters $X_{1} X_{2} X_{3} \ldots X_{n} X_{n+1}$, where $X_{i}=\{A, B\}$ for every index $i$, forms a word of length $n+1$ if and only if it contains at least one letter A and is not of the form $X_{1} X_{2} \ldots X_{n} A$, where $X_{1} X_{2} \ldots X_{n}$ is a word of length $n$.

Find a) all words of length 4, b) a formula for the number $p_{n}$ of all words of length $n$.
