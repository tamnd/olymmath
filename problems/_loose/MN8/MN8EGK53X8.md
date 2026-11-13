---
tag: MN8EGK53X8
kind: problem
type: answer
answer: \{(1, 2), (1, 4), (2, 1), (2, 3), (3, 2), (3, 4), (4, 1), (4, 3)\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M = \{(a,b,c,d)|a,b,c,d \in \{1,2,3,4\} \text{ and } abcd > 1\}$. For each $n\in \{1,2,\dots, 254\}$, the sequence $(a_1, b_1, c_1, d_1)$, $(a_2, b_2, c_2, d_2)$, $\dots$, $(a_{255}, b_{255},c_{255},d_{255})$ contains each element of $M$ exactly once and the equality $$|a_{n+1} - a_n|+|b_{n+1} - b_n|+|c_{n+1} - c_n|+|d_{n+1} - d_n| = 1$$ holds. If $c_1 = d_1 = 1$, find all possible values of the pair $(a_1,b_1)$.
