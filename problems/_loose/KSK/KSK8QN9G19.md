---
tag: KSK8QN9G19
kind: problem
type: answer
answer: \text{True}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Some towns are connected by roads, with at most one road between any two towns. Let $v$ be the number of towns and $e$ be the number of roads. Prove that

$(a)$ if $e<v-1$, then there are two towns such that one cannot travel between them;
$(b)$ if $2e>(v-1)(v-2)$, then one can travel between any two towns.
