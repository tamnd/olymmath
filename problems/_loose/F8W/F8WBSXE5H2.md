---
tag: F8WBSXE5H2
kind: problem
type: answer
answer: 10,11,12,13,14,15,16,17,18,19,30,45,90
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\overline{a b}$ be a two-digit integer ${ }^{2}$. A positive integer is a relative of $\overline{a b}$ if:

i) the units digit of $n$ is also $b$.

ii) the other digits of $n$ are distinct from zero and sum to $a$.

For example, the relatives of 31 are 31, 121, 211, and 1111. Find all two-digit numbers that divide all of their relatives.
