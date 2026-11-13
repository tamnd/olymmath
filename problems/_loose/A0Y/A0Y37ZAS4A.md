---
tag: A0Y37ZAS4A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h410939
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23541
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
Let $p: \mathbb C \to \mathbb C$ be a polynomial with degree $n$ and complex coefficients which satisfies
$$x \in \mathbb R \iff p(x) \in \mathbb R.$$
Show that $n=1$
