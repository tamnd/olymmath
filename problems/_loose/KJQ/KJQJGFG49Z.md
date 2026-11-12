---
tag: KJQJGFG49Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33566
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players independently toss (each their own) fair coins. Show that the probability that they will have the same number of heads after $n$ tosses is $2^{-2 n} \sum_{k=0}^{n}\left(C_{n}^{k}\right)^{2}$.
Derive from this the equality

$$
\sum_{k=0}^{n}\left(C_{n}^{k}\right)^{2}=C_{2 n}^{n}
$$

Let $\sigma_{n}$ be the first moment when the number of heads of one player coincides with the number of heads of the other (after $n$ tosses, and $\sigma_{n}=n+1$ if the specified moment does not exist). Find the probabilities $\mathrm{P}\left\{\sigma_{n}=k\right\}, 1 \leqslant k \leqslant n+1$, and the expected values $\mathrm{E} \min \left(\sigma_{n}, n\right)$.
