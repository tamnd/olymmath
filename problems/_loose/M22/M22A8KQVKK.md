---
tag: M22A8KQVKK
kind: problem
type: answer
answer: \frac{35}{2 \cdot 24^3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1$, $a_2$, $a_3$, $a_4$, and $a_5$ be random integers chosen independently and uniformly from the set $\{ 0, 1, 2, \dots, 23 \}$. (Note that the integers are not necessarily distinct.) Find the probability that
$$
\sum_{k=1}^{5} \operatorname{cis} \Bigl( \frac{a_k \pi}{12} \Bigr) = 0.
$$
(Here $\operatorname{cis} \theta$ means $\cos \theta + i \sin \theta$.)
