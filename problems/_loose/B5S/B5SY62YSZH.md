---
tag: B5SY62YSZH
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sets $\left\{a_{1}, a_{2}, \ldots, a_{999}\right\}$ and $\left\{b_{1}, b_{2}, \ldots, b_{999}\right\}$ together contain all the integers from 1 to 1998 . For each $\mathrm{i}$, $\left|a_{i}-b_{i}\right|=1$ or 6 . For example, we might have $a_{1}=18, a_{2}=1, b_{1}=17, b_{2}=7$. Show that $\sum_{1}^{999}\left|a_{i}-b_{i}\right|=9$ mod 10.
