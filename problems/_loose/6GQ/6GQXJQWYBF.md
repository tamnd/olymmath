---
tag: 6GQXJQWYBF
kind: problem
type: answer
answer: f_{Z}(z)=2(1-z),\quadz\in[0,1]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be independent random variables uniformly distributed on $[0,1]$. Consider the variable $Z=|X-Y|$. Prove that the distribution $F_{Z}(z)$ has a density $f_{Z}(z)$ and $f_{Z}(z)=2(1-z)$, $z \in[0,1]$.

From this, in particular, we can conclude that $E Z=1 / 3$.
