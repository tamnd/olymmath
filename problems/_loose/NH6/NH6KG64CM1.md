---
tag: NH6KG64CM1
kind: problem
type: answer
answer: \sum_{k=0}^{r}(-1)^{k}\binom{r}{k}\binom{n+r-s_{1}r-(s_{2}-s_{1}+1)k-1}{r-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Distribute $n$ identical (i.e., indistinguishable) footballs to $r$ football teams, so that each team gets at least $s_{1}$ footballs, but no more than $s_{2}\left(r s_{1} \leqslant n \leqslant r s_{2}\right)$ footballs. How many different ways are there to do this?
