---
tag: TV3PZ43H6E
kind: problem
type: answer
answer: "12345"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the digits $a, b, c, d, e$, a five-digit number $\overline{a b c d e}$ is formed. For the two-digit numbers $\overline{a b}, \overline{b c}, \overline{c d}, \overline{d e}$, formed from the same digits, it is known that

$$
(\overline{a b}+\overline{b c})(\overline{b c}+\overline{c d})(\overline{c d}+\overline{d e})=157605
$$

Find the number $\overline{a b c d e}$. Multi-digit numbers cannot start with zero.
