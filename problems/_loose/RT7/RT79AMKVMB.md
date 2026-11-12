---
tag: RT79AMKVMB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, \ldots, A_{n}$ be independent events, $\mathrm{P}\left(A_{i}\right)=p_{i}$.
(a) Show that the events $\widetilde{A}_{1}, \ldots, \widetilde{A}_{n}$, where $\widetilde{A}_{i}$ denotes either $A_{i}$ or the complement of $A_{i}$, are also independent.

(b) Show that

$$
\mathrm{P}\left(\bigcup_{i=1}^{n} A_{i}\right)=1-\prod_{i=1}^{n} \mathrm{P}\left(\bar{A}_{i}\right)
$$

(c) Let $P_{0}$ be the probability that none of the events $A_{1}, \ldots, A_{n}$ occur. Show that

$$
P_{0}=\prod_{i=1}^{n}\left(1-p_{i}\right)
$$
