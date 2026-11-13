---
tag: AP01NE9JB2
kind: problem
type: answer
answer: \{0, -1, \varphi, \overline{\varphi}\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a real $a\geq-1$ is philosophical if there exists a sequence $\epsilon_1,\epsilon_2,\dots$, with $\epsilon_i \in\{-1,1\}$ for all $i\geq1$, such that the sequence $a_1,a_2,a_3,\dots$, with $a_1=a$, satisfies
$$a_{n+1}=\epsilon_{n}\sqrt{a_{n}+1},\forall n\geq1$$
and is periodic. Find all philosophical numbers.
