---
tag: 57FNM2TECP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 India PRMO
    url: https://artofproblemsolving.com/community/c6h1857871
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8028
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2012
    source: hf-ai-mo-aops
    label: 2012 India PRMO
---
Let $N$ be the set of natural numbers. Suppose $f: N \to N$ is a function satisfying the following conditions:
(a) $f(mn) =f(m)f(n)$
(b) $f(m) < f(n)$ if $m < n$
(c) $f(2) = 2$ What is the sum of $\Sigma_{k=1}^{20}f(k)$ ?
